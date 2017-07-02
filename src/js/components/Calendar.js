class Calendar {
  constructor(element) {
    this.element = element;

    this.currentDate = '2017_07';
  }

  changeMonth() {
    // проверить на какую стрелку нажали
    // и добавить или отнять один месяц
  }

  renderCalendarHeader() {
    // нарисовать стрелки и месяц/год

  }

  renderCalendar() {
    // нарисовать сам календарь
  }

  render() {

    this.renderCalendarHeader();
    this.renderCalendar();
  }
}

export default Calendar;
