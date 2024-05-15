import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import mountainImage from '@/assets/images/mountain.webp';
import shineImage from '@/assets/images/shine.jpg';

import classes from './main.module.scss';

export const Main = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <img className={classes.logo} src={shineImage} />
      <img className={classes.logo} src={mountainImage} />

      <p>{counter}</p>

      <button className={classes.myClass} onClick={increment}>
        Increment
      </button>

      <Outlet />
    </div>
  );
};
