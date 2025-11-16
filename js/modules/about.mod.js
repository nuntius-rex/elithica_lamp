//Use this an a template to build your own  modules
export default{
  template:`
    <div class="column">
        <h1>ABOUT</h1>
        <p>Elithica is an ES6 modular framework, created by Dan Guinn, that leverages modern JavaScript language technology to create single page applications (SPA) through intuitive development techniques common in traditional web development, yet using modern language features.</p>

    </div>

    <style scoped>

    </style>
  `,
  init: function() {
    console.log("ABOUT Init");
    someFunction();
  }
}

function someFunction(){
  console.log("secondary function called");
}
