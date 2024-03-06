import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter: React.FC = () => {
  const [number1, setNumber] = useState<number>(0);
  function increment() {
    setNumber(number1 + 1);
  }
  function decrement() {
    setNumber(number1 - 1);
  }
  return (
    <div className={styles.btn}>
      <h1>{number1}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
