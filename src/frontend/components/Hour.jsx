/* eslint-disable react/prop-types */
/**
 * @title: Hour.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component holding the hour slot
 */
import { useState } from 'react';

const Hour = ({ hour, setCurrentHour, currentHour }) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <div className="hour">Hour: {hour}</div>
      <div
        className={`hour ${hour === currentHour ? 'button-on' : 'button-off'}`}
        onClick={() => {
          setIsToggled(!isToggled);
          setCurrentHour(hour);
        }}
      >
        {isToggled ? 'choose' : 'selected'}
      </div>
    </>
  );
};

export default Hour;
