/**
  * Class representing app header
  * @class
  */

class Header {
  /**
    * Create a header
    * @param {Object} element - DOM element
    * @param {Object} user - User object
    */
  constructor(element, user) {
    this.element = element;
    this.user = user;
    this.renderHeader();
  //  this.rewriteOnLogin();
  }

  /**
   * Render header
   */
  renderHeader() {

    // отображает хеадер с разными кнопками в зависимости
    // от того залогинен юзер или нет
    // при нажатии на кнопки переходить на страницу регистрации или вылогинивать юзера
    // user.logout();
    // и тд

    // возможно оптимально его отрендерить один раз, и менять состояние через event bus,
    // но пока не понятно))

    this.header = document.createElement('DIV');
    this.header.className = 'navbar navbar-default';
    this.header.innerHTML = '<div class="container-fluid"> \
        <div class="navbar-header"> \
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse"> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
            <span class="icon-bar"></span> \
          </button> \
          <a class="navbar-brand" href="#">Home</a> \
        </div> \
        <div class="navbar-collapse collapse navbar-responsive-collapse"> \
          <ul class="nav navbar-nav"> \
            <li class="active"><a href="javascript:void(0)">Active</a></li> \
            <li><a href="javascript:void(0)">Link</a></li> \
          </ul> \
          <ul class="nav navbar-nav navbar-right my-top-buttons"> \
            <li><button class="btn btn-raised btn-danger my-top-btn">View All</button></li> \
            <li><button class="btn btn-raised btn-danger my-top-btn my-top-login-btn">Logout</button></li> \
          </ul> \
        </div> \
      </div>';

    this.element.insertBefore(this.header, this.element.childNodes[0]); 
    this.element.querySelector('.my-top-buttons').style.display = 'none';

    var self = this;
    this.element.querySelector('.my-top-login-btn').addEventListener('click', function() { self.rewriteOnLogout(); });
  }

  rewriteOnLogin() {
    //this.element.querySelector('.my-top-login-btn').innerHTML = 'Logout';
    this.element.querySelector('.my-top-buttons').style.display = 'block';

  }

  rewriteOnLogout() {
    //this.element.querySelector('.my-top-login-btn').innerHTML = 'Login';
    //document.querySelector('.form-signin').reset();
    this.element.querySelector('.my-top-buttons').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
    cal.hide();
    document.querySelector('.form-signin').reset();
  }


}

//export default Header;
