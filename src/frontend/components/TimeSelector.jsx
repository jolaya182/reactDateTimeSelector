/**
 * @title: TimeSelector.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component holding the days and time slots
 */
import { useState } from 'react';
import Week from './Week';
import HourRow from './HourRow';
import Title from './Title';

const TimeSelector = () => {
  const totalDays = ['1', '2', '3'];
  const totalHours = ['1', '2', '3', '4'];
  const [currentDay, setCurrentDay] = useState('');
  const [currentHour, setCurrentHour] = useState('');

  return (
    <main className="time-selector">
      <Title currentDay={currentDay} currentHour={currentHour} />
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
