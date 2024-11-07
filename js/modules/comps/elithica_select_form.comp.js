export default class ElithicaSelectFormComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return [
					'label',
					'elem_id',
					'desc',
					'options',
					'maxlength',
					'tabindex',
					'default',
					'state',
					'pattern',
					'title',
					'required'
				];
    }
    get label() {
        return this.getAttribute('label');
    }
    get elem_id() {
        return this.getAttribute('elem_id');
    }
		get desc() {
        return this.getAttribute('desc');
    }
		get options() {
        return this.getAttribute('options');
				//values format: value1||Display Value1,value2||Display Value2
    }
		get type() {
        return this.getAttribute('type');
    }
		get title() {
        return this.getAttribute('title');
    }
    get maxlength() {
        return this.getAttribute('maxlength');
    }
    get tabindex() {
        return this.getAttribute('tabindex');
    }
    get default() {
        return this.getAttribute('default');
    }
    get state() {
        return this.getAttribute('state'); //readonly data-readonly
    }
    get required() {
        let required=this.getAttribute('required'); //true/false
        if(required==true){
          return "required";
        }else{
          return ""
        }
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
				//console.log("changed");
        this.render();
    }
		connectedCallback(){
			this.render();
		}

    render(){

			let options=this.options.trim().split(",");
			//console.log(options);
			let defaultOpt=this.default;

      //console.log(options);
      let displayOptions="";
      for (let i = 0; i < options.length; i++) {
				let curOption=options[i].split("||");
				let text="";
				let value="";
				if (curOption.length>0) {
					value=curOption[0];
					value=value.trim();
					text=curOption[1];
				}else{
					value=curOption[0];
					value=value.trim();
					text=curOption[0];
				}

				if (defaultOpt==value) {
					displayOptions+=`<option value="${value}" selected>${text}</option>`;
				}else{
					displayOptions+=`<option value="${value}">${text}</option>`;
				}
      }

    	var template = `
        <p>
          <label for="${this.elem_id}">${this.label}:</label><br>
					<small>${this.desc}</small><br>
					<select id="${this.elem_id}"  ${this.state} ${this.required}>
						${displayOptions}
					</select>
					<br>
          <small id="${this.elem_id}-message" class='error'></small>
        </p>
				<style scoped>
					#${this.elem_id}{
						padding: 5px;
						margin: 8px 0;
						display: inline-block;
						border: 1px solid #acb4dd;
						border-radius: 4px;
						box-sizing: border-box;
					}
				</style>
      `;
        this.innerHTML = template;
    }
}

window.customElements.define('elithica-select-form-comp', ElithicaSelectFormComponent);
