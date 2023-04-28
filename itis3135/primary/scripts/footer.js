
class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = '<p><a href="https://webpages.charlotte.edu/gcottrel/itis3135/primary/index3.html" target="_blank">Site designed by Gage Cottrell</a>, Certified in <a href="https://www.freecodecamp.org/certification/GageC0tt/responsive-web-design" target="_blank"> Web design</a>, as well as <a href="https://www.freecodecamp.org/certification/GageC0tt/javascript-algorithms-and-data-structures" target="_blank"> JS</a></p>'
  }
  ;
}

  customElements.define('dynamic-footer', Footer);  
