// src/App.js
import React, { useState } from "react";
import CalendarComponent from "./CalendarComponent";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div>
      <h1>Appointment Scheduler</h1>
      <CalendarComponent onChange={handleDateChange} />
    </div>
  );
};

export default Calendar;
