//Use this an a template to build your own  modules
export default{
  template:`
    <div class="column">
        <h1>TITLE</h1>
        <p>Sub-text</p>
    </div>

    <style scoped>

    </style>
  `,
  init: function() {
    console.log("Template Init");
    someFunction();
  }
}

function someFunction(){
  console.log("secondary function called");
}
