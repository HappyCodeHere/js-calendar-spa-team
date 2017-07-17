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
    this.renderEvent();
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
    var event = document.createElement('DIV');

    event.className = 'event alert alert-dismissible alert-success';
    
    event.innerHTML ='\
      <button class="close">×</button> \
      <div class="alert-link"></div>';

    event.querySelector('.alert-link').innerHTML = this.eventData.text;
    event.id = this.eventData.id;
    
    this.element.appendChild(event);
    
  }
}

//export default Event;
