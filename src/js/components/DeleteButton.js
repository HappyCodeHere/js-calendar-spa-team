/**
 * Class representing delete button
 * @class
 */
class DeleteButton {
  /**
   * Create a delete button
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
    * Handle button delete click
    */
   handleClick() {
     // удалить событие
     // db.deleteEvent(id);
     // перейти на страницу календаря / или .back()
   }

   /**
    * Render delete button
    */
   renderDeleteButton() {
     // отобразить кнопку
     // повесить handleClick
   }
}

export default DeleteButton;
