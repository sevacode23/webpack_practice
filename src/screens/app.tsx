import { useState } from 'react';

import './app.scss';

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
