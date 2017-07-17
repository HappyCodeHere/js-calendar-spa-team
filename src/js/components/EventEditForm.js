/**
  * Class representing comment form
  * @class
  */
class EventEditForm {

  /**
    * Create a comment form
    * @constructor
    */
  constructor(element, db) {
    this.element = element;
    this.db = db;
    //this.eventId = eventId;
    this.renderEventEditForm();
  }

  /**
    * Handle submit form
    */
  handleSubmit() {
    //debugger;
    this.event.text = this.eventForm.querySelector('.content').innerHTML;
    if (this.event.id) {
      db.updateEvent(this.event);
    } else {
      db.addEvent(this.event);
    }
    this.eventForm.style.display = 'none';
    cal.render();
    // собрать данные с формы
    // отправить их
    // db.addComment()
    // отчистить форму
    // обновлять список комментариев вроде не нужно, firebase обновит их сама
  }

  handleDelete() {
    this.eventForm.style.display = 'none';
    cal.render();
  }

  showEventCreateForm(cellId) {
    this.eventForm.style.display = 'block';
    this.event = { text: '', cellId: cellId };
    this.eventForm.querySelector('.content').innerHTML = this.event.text;
  }


  showEventEditForm(eventId) {
    this.eventForm.style.display = 'block';
    this.event = db.loadEvent(eventId);
    this.eventForm.querySelector('.content').innerHTML = this.event.text;
  }

  renderEventEditForm() {
    // отрендерить форму
    // повесить на форму handleSubmit
    this.eventForm = document.createElement('DIV');
    this.eventForm.className = 'event-detail panel panel-info event-form';
    this.eventForm.style.display = 'none';
    this.eventForm.innerHTML =' \
    <div class="panel-heading"> \
      <h3 class="panel-title">My important event</h3> \
    </div> \
    <div class="panel-body"> \
      <header> \
          <button class="btn btn-raised btn-danger">Delete</button> \
          <button class="btn btn-raised btn-info">Save</button> \
      </header> \
      <div class="content" contenteditable></div>\
    </div>';

    this.element.appendChild(this.eventForm); 
    var self = this;
    this.eventForm.querySelector('.btn-info').addEventListener('click', function() { self.handleSubmit(); });
    this.eventForm.querySelector('.btn-danger').addEventListener('click', function() { self.handleDelete(); });
    
  }
}

//export default CommentForm;
