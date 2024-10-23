//import

export default{
  template:`

    <h1 id="mod_title">Template</h1>

    <p>Use this template to build more modules in your SPA.</p>

    <style scoped>
      /*Style your module here*/
      #mod_title{
        color:red;
      }
    </style>

  `,
  init: function() {
    console.log("Module loaded!");
  }
}
