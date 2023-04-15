export enum AttributeButton {
  "button_text" = "button_text",
}

export default class Button extends HTMLElement {
    button_text?: string;

  static get observedAttributes(){
    const btn:Record<AttributeButton,null> ={
        button_text:null
    }
    return Object.keys(btn);
  }

  attributeChangedCallback(
    propName:AttributeButton,
    _:unknown,
    newValue:string,
  ){
    switch (propName) {
           default:
            this[propName] = newValue;
            break;
    }
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot)this.shadowRoot.innerHTML=``;
    const button = this.ownerDocument.createElement('button');
    button.innerText=`${this.button_text}`
    button.addEventListener('click', ()=>{
        button.innerText="";
    })
  }
}