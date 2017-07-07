/**
 * Class representing a event
 * @class
 */
class Event {
  /**
   * Create a event
   * @constructor
   * @param {Object} element - DOM element
   * @param {Object} eventData - Event data
   */
  constructor(element, eventData, db) {
    this.element = element;
    this.eventData = eventData;
  }

  /**
    * Delete event
    */
  deleteEvent() {
    // db.deleteEvent(id)
    // id взять из eventData
  }

  /**
   * Render event
   */
  renderEvent() {
    // добавить событие в переданный DOM элемент
    // повесить на кнопку deleteEvent
  }
}

export default Event;
