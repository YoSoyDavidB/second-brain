import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { addMonths as addMonthsFn } from 'date-fns';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center py-2">
        <div className="text-lg font-bold">{format(currentMonth, dateFormat)}</div>
        <div>
          <button onClick={prevMonth} className="px-2 py-1 mx-1 bg-gray-600 rounded">Prev</button>
          <button onClick={nextMonth} className="px-2 py-1 mx-1 bg-gray-600 rounded">Next</button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEEEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center py-2" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <div
            className={`text-center py-2 ${!isSameMonth(day, monthStart) ? "text-gray-400" : ""} ${isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""}`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            {formattedDate}
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

  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  return (
    <div className="p-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
function addMonths(currentMonth: Date, months: number): React.SetStateAction<Date> {
  return addMonthsFn(currentMonth, months);
}
