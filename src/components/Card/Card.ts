import { AttributeFigure } from "../Figure/Figure";
import { AttributeButton } from "../Button/Button";

export default class Card extends HTMLElement {
    button_text?: string;
    animal?: string;
    cereer?: string;
    celebrity?: string;
    dev?: string;
    explicit?: string;
    fashion?: string;
    food?: string;
    history?: string;
    money?: string;
    movie?: string;
    music?: string;
    political?: string;
    religion?: string;
    science?: string;
    sport?: string;
    travel?: string;
    
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
    
      connectedCallback() {
        this.render();
      }
    
      render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML=``;
        
      }
    }