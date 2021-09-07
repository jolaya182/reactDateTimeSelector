/* eslint-disable no-unused-vars */
/**
 * @title: useSelector.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: hook the registers the setting function
 */
import { useState } from 'react';

// import useState from './useState';

const useSelector = (settingFunc) => {
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);
};

export default useSelector;
