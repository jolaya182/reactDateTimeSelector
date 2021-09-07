/* eslint-disable react/prop-types */
/**
 * @title: Week.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component holding the days
 */
import Day from './Day';

const Week = ({ totalDays, setCurrentDay, currentDay }) => {
  return (
    <section className="row-week">
      {totalDays.map((day, index) => (
        <Day
          key={`day-${index}`}
          day={day}
          setCurrentDay={setCurrentDay}
          currentDay={currentDay}
        />
      ))}
    </section>
  );
};

export default Week;
