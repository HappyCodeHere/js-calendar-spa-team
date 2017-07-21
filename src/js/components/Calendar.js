/**
 * Class representing a calendar
 * @class
 */

class Calendar {
  /**
   * Create a calendar object
   * @constructor
   * @param {Object} element - DOM element
   */

  constructor(element) {
    //поменять в разметке, чтобы Header + table были обернуты в див
    this.element = element; //сюда передается обертка - пустой див

    this.currentDate = new Date();
    this.render();
    this.hide();
  }

  /**
   * Change month
   */
  goPrevMonth() {
   this.currentDate.setMonth(this.currentDate.getMonth() - 1); 
   this.render();
    // проверить на какую стрелку нажали
    // и добавить или отнять один месяц
  }

  goNextMonth() {
   this.currentDate.setMonth(this.currentDate.getMonth() + 1); 
   this.render();
    // проверить на какую стрелку нажали
    // и добавить или отнять один месяц
  }

  /**
   * Render calendar header
   */
  renderCalendarHeader() {
    var headerBody = document.createElement('DIV');
    headerBody.innerHTML = ' \
        <div class="calendar-header"> \
            <button><i class="material-icons prev-month-arrow">keyboard_arrow_left</i></button> \
              <div> \
                <span class="month">Июль</span> \
                <span class="year">2017</span> \
              </div> \
            <button><i class="material-icons next-month-arrow">keyboard_arrow_right</i></button> \
        </div>';
    
    headerBody.querySelector('.month').innerHTML = this.currentDate.getMonth();
    headerBody.querySelector('.year').innerHTML = this.currentDate.getFullYear();
    var self = this;
    headerBody.querySelector('.prev-month-arrow').addEventListener('click', function() { self.goPrevMonth(); });
    headerBody.querySelector('.next-month-arrow').addEventListener('click', function() { self.goNextMonth(); });
    this.element.appendChild(headerBody);
    
    // нарисовать стрелки и месяц/год
    // повесить на них changeMonth
  }

  /**
   * Render calendar
   */
  renderCalendar() {
    var table = document.createElement('TABLE');
    table.className = 'table-responsive';
    var year = this.currentDate.getFullYear();
    var month = this.currentDate.getMonth();

    
    var d = new Date(year, month, 1); 
    var lastD = new Date(year, month + 1, 0);
    var tableRow = table.insertRow();
    for (var i = 0; i < this.getDay(d); i++) {
      var tableCell = tableRow.insertCell();
      tableCell.className = 'calendar-day';
    }

    while (d.getMonth() == month) {
      var tableCell = tableRow.insertCell();
      tableCell.innerHTML = d.getDate();
      tableCell.id = d.getTime();
      tableCell.className = 'calendar-day';
      new EventsList(tableCell, d);


      if (this.getDay(d) % 7 === 6) {
        tableRow = table.insertRow();
      }
      d.setDate(d.getDate() + 1);
    }


    if (this.getDay(d) !== 0) {
      for (i = this.getDay(lastD); i < 6; i++) {
        var tableCell = tableRow.insertCell();
        tableCell.className = 'calendar-day';
      }
    }

    this.element.appendChild(table);
   
    var self = this;
    table.addEventListener('click', function() { self.selectCell(event); });

    // нарисовать сам календарь
  }

  /**
   * Render calendar header and body
   */
  render() {
    this.element.innerHTML = '';
    this.renderCalendarHeader();
    this.renderCalendar();
    db.loadEventsFromDB();
  }
  
  show() {
    this.element.style.display = 'block';
  }
  
  hide() {
    this.element.style.display = 'none';
  }

  getDay(date) { // weekdays Monday (0) to Sunday (6)
    var weekDay = date.getDay();
    if (weekDay === 0) weekDay = 7;
    return weekDay - 1;
  }

  selectCell(event) {
    var table = document.getElementsByTagName('TABLE');
    var target = event.target;

    while (target !== table && target.innerHTML !=='') {
      if (target.tagName == 'TD') {
        evEditForm.showEventCreateForm(target.id); 
        return;
      }

      if (target.classList.contains('event')) {
        evEditForm.showEventEditForm(target.id); 
        return;
      }

       if (target.tagName == 'BUTTON') {
        db.deleteEvent(target.parentNode.id); 
        cal.render();
        return;
      }



      target = target.parentNode;
    }         
  }

}

//export default Calendar;


