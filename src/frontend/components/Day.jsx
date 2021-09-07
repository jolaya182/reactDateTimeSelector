/* eslint-disable react/prop-types */
/**
 * @title: Day.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component that shows the day's name
 */
import { useState } from 'react';

const Day = ({ day, setCurrentDay, currentDay }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <section
      className={`day-button ${
        day === currentDay ? 'button-on' : 'button-off'
      }`}
      onClick={() => {
        setIsToggled(!isToggled);
        setCurrentDay(day);
      }}
    >
      Day {day}
    </section>
  );
};

export default Day;
