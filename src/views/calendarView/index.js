import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import RemindersContext from 'contexts/remindersContext';
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

  const [month, setMonth] = useState(getActualMonth());
  const [year, setYear] = useState(getActualYear);
  const [remindersDB, setRemindersDB] = useState({});

  return (
    <>
      <HeadBar month={month} year={year} setNewMonth={setMonth} setNewYear={setYear} />
      <Toolbar />
      <RemindersContext.Provider
        value={{
          ...remindersDB,
          updateReminders: setRemindersDB,
        }}
      >
        <Month month={month} year={year} />
      </RemindersContext.Provider>
    </>
  );
};

export default CalendarView;
