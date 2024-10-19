const date = Date.now();

//Dynamic Imports to preserve version:
let baseTemplateFile=`../js/config/main.template.js?v=${date}`;
let baseTempObj=await import(baseTemplateFile);
const base_template = baseTempObj.default;

let menuFile=`../js/config/main.menu.js?v=${date}`;
let menuObj = await import(menuFile);
const mainMenu = menuObj.default;

let routesFile=`../js/config/routes.js?v=${date}`;
let routesObj = await import(routesFile);
const rootDir = routesObj.rootDir;
const rootLocal = routesObj.rootLocal;
const routes = routesObj.routes;

$(() => {

  var hostname=window.location.hostname;
  var route=window.location.pathname;
  route=route.replaceAll(rootLocal,"/");
  console.log(route);

  //Replace and duplicate forward slashes:
  route=route.replace(/\/\+/g,'/');

  //Remove last occurence of forward shash:
  if(route.length>1){
    route=route.replace(/\/$/, '');
  }

  //Search/Filter routes to find match:
  const result = routes.filter( function(item){
      if(item.path==route){
        return item;
      }
  });

  //Load to root element:
  const title = document.getElementsByTagName('title')[0];
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML=base_template.template;
  base_template.init();

  const template_root=document.getElementById('template_root');
  const app_crumb=document.getElementById('app_crumb');
  //console.log(result);

  if(result[0]===undefined){
    template_root.innerHTML="Page Not Found!";
    app_crumb.innerHTML="Page Not Found!";
  }else{
    //Import module:
    import(result[0].module+`?v=${date}`)
    .then(mod => {
      let routeref=route.substr(1, route.length);
      let rootLocalref=rootLocal.substr(1, rootLocal.length-2);
      app_crumb.innerHTML=`<ul class="breadcrumb">
        <li class="breadcrumb-item"><a href='${rootLocal}'>${rootLocalref}</a></li>
        <li class="breadcrumb-item"><a href='${rootLocal+routeref}'>${routeref}</a></li>
        </ul>`;

      //Write module template:
      template_root.innerHTML=mod.default.template;
      mainMenu.init();
      return mod.default;
    })
    .then(mod => {
      //Init module process:
      mod.init(hostname+rootDir);
      return mod.default;
    })

  }
});
