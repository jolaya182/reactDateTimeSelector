/**
 * @title: TimeSelector.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component holding the days and time slots
 */
import { useState } from 'react';
import Week from './Week';
import HourRow from './HourRow';
// import useState from './useState';

const TimeSelector = () => {
  const totalDays = ['Day1', 'Day2', 'Day3'];
  const totalHours = ['1', '2', '3', '4'];
  const [currentDay, setCurrentDay] = useState(null);
  const [currentHour, setCurrentHour] = useState(null);
  //   const getNumber = useSelector();

  return (
    <main className="time-selector">
      <section>
        You have selected day: {currentDay}, hour {currentHour}{' '}
      </section>
      <Week
        totalDays={totalDays}
        setCurrentDay={setCurrentDay}
        currentDay={currentDay}
      />
      <HourRow
        className="hour-row"
        totalHours={totalHours}
        setCurrentHour={setCurrentHour}
        currentHour={currentHour}
      />
    </main>
  );
};

export default TimeSelector;
