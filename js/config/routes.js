export default{
  //
}

//Note: Elithica has the ability to adjust to alternate root and api locations.
//In the general Express setup they are the same, but can change.

//API Root Directory:
export const rootDir="/";

//Local Directory:
export const rootLocal="/"; //Example:  /elithica/

//Define your application routes here.
//This seection associated your modules to a given path.
export const routes=[
  {
    path:'/',
    module:'./../js/modules/home.mod.js'
  },
  {
    path:'/home',
    module:'./../js/modules/home.mod.js'
  },
  {
    path:'/features',
    module:'./../js/modules/features.mod.js'
  },
  {
    path:'/comps',
    module:'./../js/modules/comps.mod.js'
  },
  {
    path:'/about',
    module:'./../js/modules/about.mod.js'
  },
];
