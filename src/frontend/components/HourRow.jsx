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
    <div className="hour row-wrapper">
      {totalHours.map((hour, index) => {
        return (
          <div key={`hour-${index}`} className="row-hour">
            <Hour
              hour={hour}
              setCurrentHour={setCurrentHour}
              currentHour={currentHour}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HourRow;
