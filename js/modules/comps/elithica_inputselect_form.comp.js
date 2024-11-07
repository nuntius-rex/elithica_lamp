/*
- File: inputselect_form.comp.js
- Area:
- Desc: Component to build input and select feature.
Usage: Import this file into a given module, then embed the check select component tag where desired in template.
<inputselect-form-comp
	elem_id="inputSelect1"
	label="Input Select Component"
	instr="Enter and select - This component combines two related elements and displays them as one control group."
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
</inputselect-form-comp>
*/

export default class ElithicaInputSelectFormComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return [
					'elem_id',
					'label',
					'desc',
					'type',
					'maxlength',
					'tabindex',
					'placeholder',
					'state',
					'pattern',
					'title',
					'required',
					'select_id',
					'select_options'
				];
    }

		get elem_id() {
				return this.getAttribute('elem_id');
		}
    get label() {
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
		get type() {
        return this.getAttribute('type');
    }
		get title() {
        return this.getAttribute('title');
    }
		get pattern() {
        return this.getAttribute('pattern');
    }
    get maxlength() {
        return this.getAttribute('maxlength');
    }
    get tabindex() {
        return this.getAttribute('tabindex');
    }
    get placeholder() {
        return this.getAttribute('placeholder');
    }
    get state() {
        return this.getAttribute('state'); //readonly data-readonly
    }
    get required() {
        let required=this.getAttribute('required'); //required
        if(required==true){
          return "required";
        }else{
          return ""
        }
    }

		get select_id(){
			return this.getAttribute('select_id');
		}

		get select_options(){
			return this.getAttribute('select_options');
		}
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){

			let options=this.select_options.trim().split(",");
      //console.log(options);
      let displayOptions="";
      for (let i = 0; i < options.length; i++) {
        displayOptions+=`<option value="${options[i]}">${options[i]}</option>`;
      }

    	var template = `
        <p>
          <label for="${this.elem_id}_child" >${this.label}:</label>
					${this.desc}
					<br>
          <input class="inputselect inputselect_input"
						type="${this.type}"
            name="${this.elem_id}"
            id="${this.elem_id}_child"
						title="${this.title}"
						placeholder="${this.placeholder}"
            maxlength="${this.maxlength}"
						tabindex="${this.tabindex}"
						pattern="${this.pattern}"
						${this.state} ${this.required}
          >
					<select id="${this.select_id}_child" class="inputselect">
						${displayOptions}
					</select>
					<br>
          <small id="${this.elem_id}-message" class='error'></small>
					<small id="${this.select_id}-message" class='error'></small>
        </p>
				<style scoped>
				.inputselect{
					padding: 12px 20px;
			    margin: 8px 0;
			    display: inline-block;
			    border: 1px solid #acb4dd;
			    border-radius: 4px;
			    box-sizing: border-box;
				}

				.inputselect_input{
					max-width:320px;
				}
				</style>
      `;
        this.innerHTML = template;
    }
}

window.customElements.define('elithica-inputselect-form-comp', ElithicaInputSelectFormComponent);
