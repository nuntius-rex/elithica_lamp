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
  //if(
  //  ['localhost', '127.0.0.1', '', '::1' ].includes(hostname) ||
  //  (hostname.startsWith('192.168'))
  //){
    nav_menu=`
      <ul class="navbar-nav no-print">
      <li class="nav-item"><a class="navbar-link" href="home">HOME</a></li>
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

    admin_menu=`
      <ul class="admin_menu">
        <li><a href="home" class="nav-link">${icons.home} Home </a></li>
      </ul>
      <style scoped>
        .admin_menu{
          list-style-type: none;
          text-align: left;
          padding: 0;
          margin: 0;
        }

        .admin_menu li{
          margin-top:5px;
          margin-bottom:5px;
        }

        .admin_menu a{
          color:#fff;
          text-decoration:none;
          font-size: 12px;
        }

        .admin_menu li{
          color:#fff;
          text-decoration:none;
          font-size: 12px;
        }

        .admin_menu a:hover > svg{
          fill:#8b2233;
        }
        .admin_menu a:hover{
          color:#8b2233;
        }

        .admin_menu svg{
          inline-block;
          vertical-align:middle;
        }


      </style>

    `
  $("#app_menu").html(nav_menu);
  $("#admin_menu").html(admin_menu);

}
