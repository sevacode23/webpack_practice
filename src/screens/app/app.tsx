import { useState } from 'react';

import classes from './app.module.scss';

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <p>{counter}</p>

      <button className={classes.myClass} onClick={increment}>
        Increment
      </button>
    </div>
  );
};
