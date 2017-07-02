// import Router from './utils/router';

import { index } from './routes/index';
import { login } from './routes/login';

import { calendar } from './routes/calendar/calendar';
import { day } from './routes/calendar/day';
import { event } from './routes/calendar/event';
import { list } from './routes/calendar/list';

const routes = [index, login, calendar, day, event, list];

// возможно нужен будет ивент бас
// new Router({routes});
