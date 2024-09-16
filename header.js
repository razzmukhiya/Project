const template = document.getElementById('my-header-template');
const headerEl = template.content.cloneNode(true);
document.body.appendChild(headerEl);


class MyHeader extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('my-header-template');
      this.attachShadow({mode: "open"}).appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define("my-header", MyHeader);