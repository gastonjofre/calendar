import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import HeadBar from './components/headBar';
import Month from './components/month';

const CalendarView = () => {
  const getActualMonth = () => {
    const actualDate = new Date();
    return actualDate.getMonth();
  };
  const getActualYear = () => {
    const actualDate = new Date();
    return actualDate.getFullYear();
  };

  const [selectedMonth, setSelectedMonth] = useState(getActualMonth());
  const [selectedYear, setSelectedYear] = useState(getActualYear());

  return (
    <React.Fragment>
      <HeadBar month={selectedMonth} year={selectedYear} />
      <Toolbar />
      <Month month={selectedMonth} year={selectedYear} />
    </React.Fragment>
  );
};

export default CalendarView;
