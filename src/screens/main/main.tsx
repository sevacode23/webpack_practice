import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './main.module.scss';

export const Main = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <p>{counter}</p>

      <button className={classes.myClass} onClick={increment}>
        Increment
      </button>

      <Outlet />
    </div>
  );
};
