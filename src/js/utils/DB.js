/**
 * Class representing database
 * @class
 */
class DB {
  /**
   * Create a database object
   * @constructor
   * @param {String} API - API for requests
   */
  constructor(user) {
    this.eventsStorageItem = "MYEVNT_" + user;
  }

  /**
   * Load all events
   * @returns {Promise}
   */
  loadEvents() {
    //debugger;
    var json = localStorage.getItem(this.eventsStorageItem);
    var data = JSON.parse(json || "[]");
    return data;
  }

  /**
   * Load event by ID
   * @param {String} id - ID of event
   * @returns {Promise}
   */
  loadEvent(id) {
    var all = this.loadEvents();
    return all.find(function(p) { return p.id == id; });
  }


  loadEventsByDate(date) {
    //debugger;
    return this.loadEvents().filter(p => p.cellId === date);
  }
  
  saveAll(events) {
    localStorage.setItem(this.eventsStorageItem, JSON.stringify(events));
  }
    
  /**
   * Add new event
   * @param {Object} eventData - title, description, date, status, comments...
   * @returns {Promise}
   */
  addEvent(eventData) {
    var all = this.loadEvents() || [];
    eventData.id = new Date().getTime();
    all.push(eventData);
    this.saveAll(all);
  }

  updateEvent(event) {
    var all = this.loadEvents();
    var found = all.find(function(p) { return p.id == event.id; });
    if (found){
        var index = all.indexOf(found);
        all.splice(index, 1);
        all.push(event);
        this.saveAll(all);
    }
  }
  
  
  /**
   * Delete event by ID
   * @param {String} id - ID of event
   * @returns {Promise}
   */
  deleteEvent(id) {
    var all = this.loadEvents();
    var found = all.find(function(p) { return p.id == id; });
    if (found){
        var index = all.indexOf(found);
        all.splice(index, 1);
        this.saveAll(all);
    }
  }

  /**
   * Add new comment
   * @param {Object} commentData - comment data
   * @returns {Promise}
   */
  addComment(commentData) {

  }

  /**
   * Load all event's comments
   * @param {String} eventID
   * @returns {Promise}
   */
  loadComments(eventID) {

  }
  
  
}

//export default DB;
