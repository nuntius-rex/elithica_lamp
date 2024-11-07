export default class ElithicaInputFormComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['label','elem_id','type','maxlength','tabindex','placeholder','state','pattern','title','required'];
    }
    get label() {
        return this.getAttribute('label');
    }
    get elem_id() {
        return this.getAttribute('elem_id');
    }
		get type() {
        return this.getAttribute('type');
    }
		get title() {
        return this.getAttribute('title');
    }
		get pattern() {
        let patternVal=this.getAttribute('pattern');
				console.log(typeof patternVal);
				console.log(patternVal);
				if (patternVal!=null && patternVal!="" ) {
					 return ` pattern='${this.patternVal}' `;
				}else{
					return "";
				}
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
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){

    	var template = `
        <p>
          <label for="${this.elem_id}" class="required">${this.label}:</label><br>
          <input type="${this.type}"
            name="${this.elem_id}"
            id="${this.elem_id}"
						title="${this.title}"
						placeholder="${this.placeholder}"
            maxlength="${this.maxlength}"
						tabindex="${this.tabindex}"
						${this.pattern}"
						${this.state} ${this.required}
          ><br>
          <small id="${this.id}-message" class='error'></small>
        </p>
				<style scoped>

				</style>
      `;
        this.innerHTML = template;
    }
}

window.customElements.define('elithica-input-form-comp', ElithicaInputFormComponent);
