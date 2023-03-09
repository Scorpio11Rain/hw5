class ButtonCount extends HTMLElement {
    constructor() {
      super();
      let button = document.createElement('button');
      let count = 0;
      button.textContent = 'Times Clicked: '+ count;
      function clicked(){
        count++;
        button.textContent = 'Times Clicked: '+ count;
      }
      button.addEventListener('click', clicked);
      this.appendChild(button);
    }
  }
customElements.define('button-count', ButtonCount);