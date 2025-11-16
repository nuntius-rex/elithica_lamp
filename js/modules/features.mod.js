
export default{
  template:`
    <div class="column">
        <h1>FEATURES</h1>
        <p>The following are a list of features available by default in the Elithica Framework.</p>
        <p>
          <ul>
            <li>Intuitive Structure</li>
            <li>SPA Routing</li>
            <li>Modular Design</li>
            <li>Fetch Library</li>
            <li>Form Components</li>
            <li>Form Validation Tool</li>
          </ul>
        </p>
    </div>

    <style scoped>

    </style>
  `,
  init: function() {
    console.log("Features Init");
    someFunction();
  }
}

function someFunction(){
  console.log("secondary function called");
}
