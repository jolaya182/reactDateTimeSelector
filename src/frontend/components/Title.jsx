/* eslint-disable react/prop-types */
/**
 * @title: Title.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: component that display the selected day and hour
 */

const Title = ({ currentDay, currentHour }) => {
  return (
    <section className="title">
      {`You've selected day ${currentDay}, hour ${currentHour}`}
    </section>
  );
};

export default Title;
