/**
  * Class representing app footer
  * @class
  */

class Footer {
  /**
    * Create a footer
    * @param {Object} element - DOM element
    */
  constructor(element, user) {
    this.element = element;
    this.renderFooter();
  }

  /**
   * Render footer
   */
  renderFooter() {
    this.footer = document.createElement('FOOTER');
    this.footer.innerHTML = '&copy; 2017 My team JS calendar. All rights reserved. Make with love <span>❤</span>';
    this.element.appendChild(this.footer); 
  }
}
