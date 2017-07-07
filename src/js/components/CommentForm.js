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

  renderCommentForm() {
    // отрендерить форму
    // повесить на форму handleSubmit
  }
}

export default CommentForm;
