import styles from "./dashboard.css";

import { getData } from "../services/getData";
import { Card } from "../services/getData";
import { apiType } from "../types/apiType";
//import "../services/getData"

export default class dashboard extends HTMLElement {
    
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
    
      connectedCallback() {
        this.render();
      }
    
      render() {
        if (this.shadowRoot)this.shadowRoot.innerHTML=`
        <styles>src="./dashboard.css"</styles>`;
      }
    }
    