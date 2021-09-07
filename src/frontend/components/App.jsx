/**
 * @title: App.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: main component holding the application together
 */
// import Recipes from './Recipes';
// import ballons from '../images/balloons.jpg';
// import paw from '../images/paw.svg';
import TimeSelector from './TimeSelector';
import '../styles/index.scss';

const App = () => {
  return (
    <main>
      <TimeSelector />
    </main>
  );
};

export default App;
