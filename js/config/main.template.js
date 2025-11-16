import icons from "./../lib/svg/icons.js";

export default{
  template:`
  <header>
    <section>
      <div class="column" id="main_menu"></div>
    </section>
    <section>
      <div class="column">
        <h1 id="mainH1">ELITHICA (Node/Express Version)</h1>
        <p id="subline">A modular front-end framework for intuitive web development.</p>
      </div>
      <div class="column" id="logo_div">
        <img src="img/logo/elithica-logo.png">
      </div>

    </section>
    <section>
      <div id="app_crumb"></div>
    </section>
  </header>

  <main>
    <section id="template_root">
      <!-- dynamic content -->
    </section>
  </main>
  <footer>
    <section>
      <div class="column" id="social_menu">
          <!-- social menu -->
      </div>
    </section>
    <section>
      <div class="column">
          &copy; Dan Guinn, 2025
      </div>
    </section>
  </footer>
  `,
  init: function() {
    console.log("Template Init");


    //$("#main_modal").hide();

    //$("#modal_close").click(function(){
    //  $("#main_modal").hide();
    //});

    //This will be dynamic and exhaustive in a later version:
    const pageDef={
      title:"ELITHICA",
    }

    $("#title").html(pageDef.title);

  }
}
