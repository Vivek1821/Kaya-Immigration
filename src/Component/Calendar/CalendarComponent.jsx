import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate } from "react-router-dom";
import "./CalendarComponent.css"; // Import your CSS file for styling

const CalendarComponent = ({ onChange }) => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      console.log("Clicked outside modal");
      console.log("Event target:", event.target);
      console.log("Modal ref:", modalRef.current);
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal
        console.log("Closing modal");
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setShowModal(true);
    // Additional logic if needed
  };

  const handleTimeSlotSelect = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setShowModal(false);

    // Save the selected time slot to local storage
    localStorage.setItem(
      "selectedTimeSlot",
      JSON.stringify({ date, timeSlot })
    );

    // You can also call the onChange prop if needed
    onChange({ date, timeSlot });
    navigate(`/inputform?slot=${encodeURIComponent(timeSlot)}`);
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const period = hour < 12 ? "AM" : "PM";
        const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
        const startTime = `${hourFormatted.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const endTime = `${
          (hour + Math.floor(minute / 30)) % 12 === 0
            ? 12
            : (hour + Math.floor(minute / 30)) % 12
        }:${(minute + 30) % 60 === 0 ? "00" : (minute + 30) % 60}`;
        const timeSlot = `${startTime} ${period} - ${endTime} ${period}`;
        timeSlots.push(
          <div className="flex flex-col text-center w-full">
            <button
              key={`${hour}-${minute}`}
              onClick={() => handleTimeSlotSelect(timeSlot)}
              className="flex flex-col border-1 border-black rounded-md items-center w-full"
            >
              {timeSlot}
            </button>
          </div>
        );
      }
    }
    return timeSlots;
  };

  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="card">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
      </div>

      {showModal && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content gap-2 border-1 border-black">
            <h1 className="text-lg text-center w-full">Select Slot: </h1>
            {generateTimeSlots()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
