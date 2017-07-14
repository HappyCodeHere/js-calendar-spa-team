// import Router from './utils/router';
/*import User from './utils/User';
import DB from './utils/DB';

import { index } from './routes/index';
import { login } from './routes/login';

import { calendar } from './routes/calendar/calendar';
import { day } from './routes/calendar/day';
import { event } from './routes/calendar/event';
import { list } from './routes/calendar/list';

const routes = [index, login, calendar, day, event, list];

const user = new User();
const db = new DB('https://firebase.com');*/

// возможно нужен будет ивент бас
// new Router({routes, user, db});
//= components/Calendar.js
//= components/Comment.js
//= components/EventsList.js
//= components/Event.js
//= components/Header.js
//= components/Footer.js
//= components/LoginForm.js
//= components/EventEditForm.js
//= utils/DB.js
//= utils/User.js


var db = new DB(); 

var calendarContainer = document.querySelector('.calendar-container');
var cal = new Calendar(calendarContainer);

var evEditForm = new EventEditForm(document.body, ''); 
var user = new User();

var header = new Header(document.body, ''); 
var login = new LoginForm(document.body, ''); 
var footer = new Footer(document.body); 



