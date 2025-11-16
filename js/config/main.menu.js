import icons from "./../lib/svg/icons.js";

export default{
  init: () => {
    console.log("Main Menu init");
    loadMainMenu();
  },

}

const loadMainMenu=()=>{
  var nav_menu="";
  var admin_menu="";
  var hostname=window.location.hostname;

    nav_menu=`
      <ul class="navbar-nav no-print">
      <li class="nav-item"><a class="navbar-link" href="home">HOME</a></li>
      <li class="nav-item"><a class="navbar-link" href="features">FEATURES</a></li>
      <li class="nav-item"><a class="navbar-link" href="comps">COMPS</a></li>
      <li class="nav-item"><a class="navbar-link" href="about">ABOUT</a></li>
      </ul>

      <style scoped>

          .navbar-nav{
            list-style-type: none;
            text-align: left;
            padding: 0;
            margin: 0;
          }

          .navbar-nav  li{
            display: inline-block;
          }

          .nav-link{
            fill:#fff;
          }

      </style>
    `;


  $("#main_menu").html(nav_menu);

}
