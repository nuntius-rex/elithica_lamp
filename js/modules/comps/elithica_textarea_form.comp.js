export default class ElithicaTextAreaFormComponent extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['elem_id','label','desc','width','height','default_text','maxlength','tabindex','placeholder','state','pattern','title','required'];
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
		get width() {
			let width=this.getAttribute('width');
			return `width:${width};`;
		}
		get height() {
			let height=this.getAttribute('height');
			return `height:${height};`;
		}
		get default_text() {
			return this.getAttribute('default_text');
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
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){
    	var template = `
        <p>
          <label for="${this.id}" class="required">${this.label}:</label><br>
          <textarea
            name="${this.elem_id}"
            id="${this.elem_id}"
						title="${this.title}"
						placeholder="${this.placeholder}"
            maxlength="${this.maxlength}"
						tabindex="${this.tabindex}"
						pattern="${this.pattern}"
						style="${this.width}${this.height}"
						${this.state} ${this.required}
          >${this.default_text}</textarea>
					<br>
          <small id="${this.elem_id}-message" class='error'></small>
        </p>
				<style scoped>

				</style>
      `;
        this.innerHTML = template;
    }
}

window.customElements.define('elithica-textarea-form-comp', ElithicaTextAreaFormComponent);
