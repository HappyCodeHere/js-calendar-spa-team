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
  }
}

export default Header;
