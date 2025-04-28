import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns";

const CalenderCompo = ({ selectedDate, onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateClick = (day) => {
    if (onDateChange) {
      onDateChange(day);
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="btn btn-ghost btn-sm">
          &#8592;
        </button>
        <h2 className="text-xl font-bold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button onClick={nextMonth} className="btn btn-ghost btn-sm">
          &#8594;
        </button>
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            className={`p-2 text-center cursor-pointer rounded-full transition-all duration-200 
                ${!isSameMonth(day, monthStart) ? "text-base-content/40" : ""}
                ${
                  isSameDay(day, selectedDate)
                    ? "bg-primary text-primary-content"
                    : isToday(day)
                    ? "bg-secondary/20"
                    : "hover:bg-primary/20"
                }
              `}
            key={day.toString()}
            onClick={() => handleDateClick(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="w-full mx-auto p-5 shadow-xl rounded-2xl bg-base-100">
      {renderHeader()}
      {renderCells()}
    </div>
  );
};

export default CalenderCompo;
