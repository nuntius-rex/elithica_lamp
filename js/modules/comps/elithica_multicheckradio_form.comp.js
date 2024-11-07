
/**
- File: elithica_multicheckbox_form.comp.js
- Area: Components
- Desc: This is the component structure that builds the <multicheck-form-comp/> component.
- Usage: Import this file into a given module, then embed the check select component tag where desired
<multicheck-form-comp
	elem_id="multiCheck1"
	label="Multi Checkbox Component"
	desc="Check all that apply. - This component allows you to declare a collection of checkboxes in a single component."
	checkboxes="red, green, blue"
	tabindex="-1"
	titles="Select an option"
	required="true"
	linebreak="true",
	margin="10px"
>
</multicheck-form-comp>
*/

export default class ElithicaCheckRadioFormComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['elem_id','label','desc','type','tabindex','check_radios','titles','linebreak','margin','required'];
    }
    get elem_id() {
        return this.getAttribute('elem_id');
    }
		get label() {
        return this.getAttribute('label');
    }
		get type() {
        return this.getAttribute('type');
    }
		get desc(){
				let desc=this.getAttribute('desc');
				if (desc==null) {
					return "";
				}else{
					return `<br><small>${desc}</small>`;
				}
		}
		get titles() {
        return this.getAttribute('titles');
    }
		get tabindex() {
        return this.getAttribute('tabindex');
    }
		get check_radios() {
        return this.getAttribute('check_radios');
    }
		get margin() {
        return this.getAttribute('margin');
    }
		get linebreak() {
        let linebreak=this.getAttribute('linebreak');
				if(linebreak=="true"){
					return "<br>";
				}else{
					return "";
				}
    }
    get required() {
        let required=this.getAttribute('required'); //required
        if(required=="true"){
          return "required";
        }else{
          return ""
        }
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){

			let check_radios=this.check_radios.trim().split(",");
			//console.log(options);
			//console.log(this.linebreak);
			let displayCheckRadios="";
      for (let i = 0; i < check_radios.length; i++) {

				let name="";
				if (this.type=="radio") {
					name=`${this.elem_id}[]`;
				}else if(this.type=="checkbox"){
					name=`${this.elem_id}_${i}`;
				}

        displayCheckRadios+=`
					<input type="${this.type}"
						name="name"
						id="${this.elem_id}_${i}"
						title="${this.title}"
						maxlength="${check_radios[i].length}"
						tabindex="${this.tabindex}"
						${this.required}
					>
					${check_radios[i]} ${this.linebreak}
				`;
      }

    	var template = `
        <p>
          <label for="${this.elem_id}" class="required">${this.label}:</label>
					${this.desc}
					<div style="margin-left:${this.margin}; margin-top:-20px">${displayCheckRadios}</div>
        	<br>
          <small id="${this.elem_id}-message" class='error'></small>
        </p>
				<style scoped>

				</style>
      `;
        this.innerHTML = template;
    }
}

window.customElements.define('elithica-multicheckradio-form-comp', ElithicaCheckRadioFormComponent);
