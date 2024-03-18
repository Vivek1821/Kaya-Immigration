// src/App.js
import React, { useState } from "react";
import CalendarComponent from "./CalendarComponent";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="mt-4 text-xl font-semibold">Appointment Scheduler</h1>
      <CalendarComponent onChange={handleDateChange} />
    </div>
  );
};

export default Calendar;
