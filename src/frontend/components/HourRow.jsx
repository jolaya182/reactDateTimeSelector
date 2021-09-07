/* eslint-disable react/prop-types */
/**
 * @title: Week.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component holding the hour and toggling buttons
 */
import Hour from './Hour';

const HourRow = ({ totalHours, setCurrentHour, currentHour }) => {
  return (
    <>
      {totalHours.map((hour, index) => {
        return (
          <div className="row-hour">
            <Hour
              key={`hour-${index}`}
              hour={hour}
              setCurrentHour={setCurrentHour}
              currentHour={currentHour}
            />
          </div>
        );
      })}
    </>
  );
};

export default HourRow;
