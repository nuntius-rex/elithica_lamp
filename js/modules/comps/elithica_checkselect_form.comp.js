
/**
- File: checkselect.comp.js
- Area: Components
- Desc: This is the component structure that builds the <checkselect-comp/> component.
- Usage: Import this file into a given module, then embed the check select component tag where desired in template.
<checkselect-form-comp
	elem_id="checkSelect1"
	label="Check Select Component"
	desc="Check all that apply. - This component is a variation of a multiselect, but with simulated check boxes."
	options="test1,test2,test3,test4"
	class="checkSelect"
></checkselect-form-comp>
*/

export default class ElithicaCheckSelectComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['elem_id','label','desc','options'];
    }
		get elem_id(){
			return this.getAttribute('elem_id');
		}
		get label(){
			return this.getAttribute('label');
		}
		get desc(){
				let desc=this.getAttribute('desc');
				if (desc==null) {
					return "";
				}else{
					return `<br><small>${desc}</small>`;
				}
		}
		get options() {
        return this.getAttribute('options');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    style(){
      return `<style scoped>
				.checkSelectContainer{
					text-align:left;
				}
        .checkSelect select{
          height:150px;
          width:260px;
          padding:10px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #acb4dd;
          border-radius: 4px;
          box-sizing: border-box;
          scrollbar-width: none;
        }

        .checkSelect select option{
          padding:3px;
          font: 11px Verdana, Geneva, sans-serif;
          cursor:pointer;
        }
      </style>
      `
    }
    render(){
      //console.log(this.options);
      let options=this.options.trim().split(",");
      //console.log(options);
      let displayOptions="";
      for (let i = 0; i < options.length; i++) {
        displayOptions+=`<option value="${options[i]}">${options[i]}</option>`;
      }

    	var template = `
				<div class="checkSelectContainer">
				<label for="${this.elem_id}">${this.label}<label>
				${this.desc}<br>
        <select id="${this.elem_id}" name="${this.elem_id}" multiple>
          ${displayOptions}
        </select>
				</div>
        <style scoped>
				${this.style()}
				</style>
      `;

        this.innerHTML = template;

        //Add event listener on item just created:
        $('option').mousedown(function(e) {
            e.preventDefault();

            //Check if parent select is disabled:
            let parentSelectStatus=$(".checkSelect select").prop('disabled');
            if(parentSelectStatus){
              return false;
            }

            //Get text of selected option:
            let text=$(this).text();
            let value=$(this).val();

            //If this option is selected, add checkmark
            if( !$(this).prop('selected') ){
                $(this).text(`\u2713 ${text}`);
                $(this).prop('selected', true);
            }else{
                //Reset text to same a value if no selected:
                //console.log("val:"+value);
                $(this).text(`${value}`);
                $(this).prop('selected', false);
            }

            return false;
        });

    }
}

//Register the component:
window.customElements.define('elithica-checkselect-form-comp', ElithicaCheckSelectComponent);
