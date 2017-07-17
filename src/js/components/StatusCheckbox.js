/**
  * Class representing status checkbox
  * @class
  */
class StatusCheckbox {
  /**
   * Create a status checkbox
   * @constructor
   * @param {Object} element - DOM element
   * @param {String} id - ID of event
   * @param {Object} db - DB object
   */
  constructor(element, id, db) {
     this.element = element;
     this.id = id;
     this.db = db;
  }

  /**
   * Handle checkbox change
   */
  handleChange() {
    // отправить запрос на изменение статуса
    // db...
  }

   /**
    * Render a status checkbox
    */
  renderStatusCheckbox() {
    // отрендерить чекбокс
    // повесить handleChange на него
  }
}

//export default StatusCheckbox;
