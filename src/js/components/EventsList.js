/**
 * Class representing a event
 * @class
 */
class EventsList {
  /**
   * Create a event
   * @constructor
   * @param {Object} element - DOM element
   * @param {Object} eventData - Event data
   */
  constructor(element) {
    this.element = element;
    //this.date = date;
    this.renderEventsList();
  }

  /**
   * Render event
   */
  renderEventsList() {
    var events = db.loadEventsByDate(this.element.id);
    if (!events || !events.length) return;
    
    var eventsList = document.createElement('DIV');
    eventsList.className = 'events';
    eventsList.innerHTML ='\
    <div class="panel panel-info"> \
        <div class="panel-heading"> \
          <h3 class="panel-title">Your events</h3> \
        </div> \
        <div class="panel-body"> \
        </div> \
    </div>';
    var eventsListContainer = eventsList.querySelector('.panel-body');
    /*new Event(eventsListContainer, 'hello');
    new Event(eventsListContainer, 'hello world');*/
    
    events.forEach(function(elem) {
      new Event(eventsListContainer, elem);
    });

    this.element.appendChild(eventsList); 
        // добавить событие в переданный DOM элемент
    // повесить на кнопку deleteEvent
  }
}

//export default Event;
