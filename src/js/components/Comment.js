/**
 * Class representing a comment
 * @class
 */
class Comment {
  /**
   * Create a comment
   * @constructor
   * @param {Object} element - DOM element
   * @param {Object} commentData - Comment data
   */
  constructor(element, commentData) {
    this.element = element; // элемент = ячейка?
    this.commentData = commentData;
    this.renderComment();
  }

  /**
   * Render comment
   */
  renderComment() {
  	var comment = document.createElement('DIV');
  	comment.innerHTML = '\
  	<div class="comments"> \
	  <h4>Comments</h4> \
	  <ul class="list-group"> \
	    <li class="list-group-item">rerel</li> \
	    <li class="list-group-item">fkdlfdkfl</li> \
	  </ul> \
	</div>';
  	comment.contentEditable = 'true';
  	this.element.appendChild(comment);

  }
}

//export default Comment;
