import ElithicaCheckSelectComponent from "../../js/modules/comps/elithica_checkselect_form.comp.js";
import ElithicaInputSelectComponent from "../../js/modules/comps/elithica_inputselect_form.comp.js";
import ElithicaCheckRadioFormComponent from "../../js/modules/comps/elithica_multicheckradio_form.comp.js";
import ElithicaSelectFormComponent from "../../js/modules/comps/elithica_select_form.comp.js";
import ElithicaTextAreaFormComponent from "../../js/modules/comps/elithica_textarea_form.comp.js";
import ElithicaInputFormComponent from "../../js/modules/comps/elithica_input_form.comp.js";

import {fetchData, postData, deleteData} from "./../utils/fetch.Util.js";
import {formTypeObj, checkAllTypes} from "./../utils/valid.Util.js";

export default{
  template:`

    <div class="column">

      <h2>Elithica Components</h2>

      <p>Welcome to Elithica Components! Elithica provides a collection of custom made ES6 components that can be used to quickly build forms. Each component listed has multiple things going for it that you should be familiar with if you have worked with standard HTML:

        <ul>
          <li>Each have an element tag: &lt;component_name&gt; and a closing element tag: &lt;/component_name&gt;</li>
          <li>Each component tag has attribute settings:<br><br>
            <pre><code>
              &lt;component_name
                attribute1="setting"
                attribute2="setting"
              &gt;
              &lt;/component_name&gt;
            </code></pre>
          </li>
          <li>You can wrap these in a standard &lt;form&gt; tag and add a submit button and you have an working web form.</li>
          <li>Additionally, each component uses both name and id attributes internally to allow the field data to be collected.</li>
          <li>Lastly, each component has features designed for the related validation utility provided.</li>
          <li>Explore these components and have fun. Study the code and make your own if you like!</li>
        </ul>
      </p>

      <h3>Component Examples:</h3>

      <p>Before we begin, you may be wondering, in the first couple of cases, "Why don't we just make the standard HTML elements?" The first answer is uniformity. Elithica has a common form validator, so by making the form elements in a uniform way, both HTML validation and Elithica's JavaScript validation operate in a more uniform way. So while you could make the HTML elements directly, it can be rather tedious. The second reason is automation. As components get more elaborate, they can do more complex things. Automating that make she application more stable and less prone to errors. Let's start with the most simple and work to the more advanced. </p>

      <form id="compForm">

          <p>
            <!-- Input Component -->
            <h4>Simple Input Component Example</h4>
            <div class="example">
                <elithica-input-form-comp
                  elem_id="inputComp1"
                  label="Input Component"
                  desc="Enter a value. - This component provides a simple input field."
                  type=""
                  maxlength=""
                  tabindex=""
                  placeholder=""
                  state=""
                  pattern=""
                  title=""
                  required=""
                >
                </elithica-input-form-comp>
            </div>
          </p>

        <p> The input component above is just a simple input but contains other helpful features packed in for form validation. It is made by first importing the component into the module (see js/modules/comps.mod.js) and then adding the following markup to the template:

        <pre><code>
          &lt;elithica-input-form-comp
            elem_id="inputComp1"
            label="Input Component"
            desc="Enter a value. - This component provides a simple input field."
            type=""
            maxlength=""
            tabindex=""
            placeholder=""
            state=""
            pattern=""
            title=""
            required=""
          &gt;
          &lt;/elithica-input-form-comp&gt;
        </code></pre>
        </p>

        <p>

          <!-- Textarea Component -->
          <h4>Textarea Component Example</h4>
          <div class="example">
              <elithica-textarea-form-comp
                elem_id="textarea1"
                label="Textarea Component"
                desc="Enter some text - This component automates standard textarea creation."
                width="250px"
                height="200px"
                default_text="This is some default text"
                maxlength="400"
                tabindex="-1"
                placeholder="Enter some text."
                state=""
                pattern=""
                title="Enter your text here:"
                required="true"
              >
              </elithica-textarea-form-comp>
          </div>
        </p>

        <p>The Textarea Component above is also just a simple textarea but it contains other helpful features packed in for form validation. It is made by first importing the component into the module (see js/modules/comps.mod.js) and then adding the following markup to the template:

        <pre><code>
        &lt;elithica-textarea-form-comp
          elem_id="textarea1"
          label="Textarea Component"
          desc="Enter some text - This component automates standard textarea creation."
          default_text="This is some default text"
          width="250px"
          height="200px"
          maxlength="400"
          tabindex="-1"
          placeholder="Enter some text."
          state=""
          pattern=""
          title="Enter your text here:"
          required="true"
          &gt;
          &lt;/elithica-textarea-form-comp&gt;
        </code></pre>
        </p>

        <p>
          <!-- Multi Checkbox Component -->
          <h4>Multi Checkbox Radio (CheckRadio) Component</h4>
          <div class="example">
              <elithica-multicheckradio-form-comp
                elem_id="multiCheck1"
                label="Multi Checkbox Radio (CheckRadio) Component"
                desc="Check all that apply. - This component allows you to declare a single or collection of multiple checkboxes or radio buttons in a single component."
                check_radios="red, green, blue"
                type="checkbox"
                tabindex="-1"
                titles="Select an option"
                required="true"
                linebreak="true",
                margin="10px"
              >
              </elithica-multicheckradio-form-comp>
          </div>
          <div class="example">
              <elithica-multicheckradio-form-comp
                elem_id="multiCheck1"
                label="Multi Checkbox Radio (CheckRadio) Component"
                desc="Click your option. - This component allows you to declare a single or collection of multiple checkboxes or radio buttons in a single component."
                check_radios="red, green, blue"
                type="radio"
                tabindex="-1"
                titles="Select an option"
                required="true"
                linebreak="true",
                margin="10px"
              >
              </elithica-multicheckradio-form-comp>
          </div>
        </p>

        <p>With the Multi-CheckRadio Component above we begin to see more of the advantages. So while we are also just making simple elements, we are able to switch between similar elements. In this case when using checkboxes or radios, we are able to dynamically make as many as we need based off of the check_radios attribute. When the check_radios attribute is set to "red, green, blue" and the type field is set to "checkbox" the component will dynamically make all three checkboxes. When the check_radios attribute is set to "red, green, blue" and the type field is set to "radio" the component will dynamically make all three radio buttons. The component also knows to switch the behavior between radio and checkbox. Again additionally, it also contains other helpful features packed in for form validation. It is made by first importing the component into the module and then adding the following markup to the template:

        <pre><code>
        &lt;elithica-multicheck-form-comp
          elem_id="multiCheck1"
          label="Multi Checkbox Component"
          desc="Check all that apply. - This component allows you to declare
          a single or collection of multiple checkboxes or radio buttons in a single component."
          checkboxes="red, green, blue"
          tabindex="-1"
          titles="Select an option"
          <strong>type="checkbox"</strong>
          required="true"
          linebreak="true",
          margin="10px"
        &gt;
        &lt;/elithica-multicheck-form-comp&gt;
        </code></pre>
        </p>


        <p>
          <!-- Select Component -->
          <h4>Select Component Example</h4>
          <div class="example">
              <elithica-select-form-comp
                elem_id="select1"
                label="Select Component"
                desc="Select an option - This component automates standard select field creation."
                options="||,red||Red,green||Green,blue||Blue"
                maxlength="100"
                tabindex="-1"
                default=""
                state=""
                pattern=""
                title="Select an option"
                required="true"
              >
              </elithica-select-form-comp>
          </div>
        </p>

        <p>LIkewise, with the Select Component above, we can also see advantages. While we are also just making a simple select element, it will populate the select options for us. Note the options attribute. It is a double delimited string. Each option is comma separated and the value and text are separated by the double pipe || delimiter. Again additionally, it also contains other helpful features packed in for form validation. It is made by first importing the component into the module and then adding the following markup to the template:

        <pre><code>
        &lt;elithica-select-form-comp
          elem_id="select1"
          label="Select Component"
          desc="Select an option - This component automates standard select field creation."
          <strong>options="||,red||Red,green||Green,blue||Blue"</strong>
          maxlength="100"
          tabindex="-1"
          default=""
          state=""
          pattern=""
          title="Select an option"
          required="true"
        &gt;
        &lt;/elithica-select-form-comp&gt;
        </code></pre>
        </p>

        <p>
          <!--  Check Select Component -->
          <h4>Check Select Component</h4>
          <div class="example">
            <elithica-checkselect-form-comp
              elem_id="checkSelect1"
              label="Check Select Component"
              desc="Check all that apply. - This component is a variation of a multiselect, but with simulated check boxes."
              options="test1,test2,test3,test4"
              class="checkSelect"
            ></elithica-checkselect-form-comp>
          </div>
        </p>

        <p>The Check Select Component is an example of when a core element like a &lt;select&gt; has been transformed. In this case our component has converted the multi-select into a multicheck. It is made by first importing the component into the module and then adding the following markup to the template:

        <pre><code>
        &lt;elithica-checkselect-form-comp
            elem_id="checkSelect1"
            label="Check Select Component"
            desc="Check all that apply. - This component is a variation of a multiselect, but with simulated check boxes."
            options="test1,test2,test3,test4"
            class="checkSelect"
          &gt;
          &lt;/elithica-checkselect-form-comp&gt;
        </pre></code>
        </p>

        <p>
          <!--  Input Select Component -->
          <h4>Input Select Component</h4>
          <div class="example">
            <elithica-inputselect-form-comp
              elem_id="inputSelect1"
              label="Input Select Component"
              desc="Enter and select - This component combines two related elements and displays them as one control group."
              type="datetime-local"
              state=""
              required="true"
              placeholder="Enter a name",
              maxlength="255"
              tabindex="1"
              select_id="gender"
              select_options=",male, female"
              select_maxlength="12"
              >
            </elithica-inputselect-form-comp>
          </div>
        </p>
        <p>

          The Input Select Component combines two standard elements together to make an interface that has related elements. It is made by first importing the component into the module and then adding the following markup to the template:

          <pre><code>
          &lt;elithica-inputselect-form-comp
            elem_id="inputSelect1"
            label="Input Select Component"
            desc="Enter and select - This component combines two related elements and displays them as one control group."
            type="datetime-local"
            state=""
            required="true"
            placeholder="Enter a name",
            maxlength="255"
            tabindex="1"
            select_id="gender"
            select_options=",male, female"
            select_maxlength="12"
            &gt;
            &lt;/elithica-inputselect-form-comp&gt;
          </pre></code>

        </p>

        <h4>Validation</h4>

        <div id="validation_result"></div>

        <button type="submit">Submit</button>

      </form>

    </div>
    <style scoped>

    </style>

  `,
  init: function() {

        //Handle Checkbox Required:
        var requiredCheckboxes = $('input[type="checkbox"]:checkbox[required]');
        //console.log(requiredCheckboxes);
        requiredCheckboxes.on("change",function(){
            //console.log("changed");
            if(requiredCheckboxes.is(':checked')) {
                requiredCheckboxes.removeAttr('required');
            } else {
                requiredCheckboxes.attr('required', 'required');
            }
        });


        //FORM Submition:
        const formID="#compForm";
        $(formID).on("submit", function(e){
          e.preventDefault();

          //===================
          // Begin Validation:
          //===================
          var data = {};
          $(this).serializeArray().map(function(item) {
            if ( data[item.name] ) {
                if ( typeof(data[item.name]) === "string" ) {
                    data[item.name] = [data[item.name]];
                }
                data[item.name].push(item.value);
            } else {
                data[item.name] = item.value;
            }
          });

          console.log(data);

          let formTypes=formTypeObj(formID);
          console.log(formTypes);
          let formResults=checkAllTypes(formTypes);
          console.log(formResults);

          //===================
          // End Validation
          //===================

          if(formResults.errors==0){

            console.log("Ready to process");

          }
      });

  }//End Init
}//End Module
