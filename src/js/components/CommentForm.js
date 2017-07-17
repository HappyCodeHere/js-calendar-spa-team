/**
  * Class representing comment form
  * @class
  */
class CommentForm {

  /**
    * Create a comment form
    * @constructor
    */
  constructor(element, db) {
    this.element = element;
    this.db = db;
    this.renderCommentForm();
  }

  /**
    * Handle submit form
    */
  handleSubmit() {
    // собрать данные с формы
    // отправить их
    // db.addComment()
    // отчистить форму
    // обновлять список комментариев вроде не нужно, firebase обновит их сама
  }

  showEventEditForm(eventId) {
    this.eventForm.style.display = 'block';
  }

  renderEventEditForm() {
    // отрендерить форму
    // повесить на форму handleSubmit
    this.eventForm = document.createElement('DIV');
    this.eventForm.className = 'event-detail panel panel-info';
    this.eventForm.style.display = 'none';
    this.eventForm.innerHTML =' \
    <div class="panel-heading"> \
      <h3 class="panel-title">My important event</h3> \
    </div> \
    <div class="panel-body"> \
      <header> \
          <button class="btn btn-raised btn-danger">Delete</button> \
      </header> \
      Lorem ipsum dolor sit \
    </div>';

    this.element.appendChild(this.eventForm); 
    
  }

  renderCommentForm() {
    // отрендерить форму
    // повесить на форму handleSubmit
  }
}

//export default CommentForm;
