import React from 'react';

const WeekDaysList = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
    <h1>Slip 5</h1>
      <h2>Week Days</h2>
      <ul>
        {weekDays.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeekDaysList;
