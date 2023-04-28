class Header extends HTMLElement {
    constructor() {
      super();
    }
  }

  connectedCallback(); {
    this.innerHTML = "<h1>Gage Cottrell's Goofy Cat</h1>"
  }


  customElements.define('dynamic-header', Header);  
