import React from 'react';
import styles from './Inputs.module.css';

function Inputs() {
  return (
    <div>
      <input className={styles.input} placeholder="Input 1" />
      <input className={styles.input} placeholder="Input 2" />
      <input className={styles.input} placeholder="Input 3" />
    </div>
  );
}

export default Inputs;

// CSS (Inputs.module.css)
.input {
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
