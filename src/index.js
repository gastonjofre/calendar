import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarView from './views/calendarView';

const root = <CalendarView />;

ReactDOM.render(root, document.getElementById('root'));
