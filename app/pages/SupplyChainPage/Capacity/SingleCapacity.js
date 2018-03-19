import React from 'react';
import styles from './Capacity.css';
import Progress from '../../../ui/Progress/Progress';

export default function SingleCapacity({ capacity }) {
  return capacity.valueSeq().map(row => (
    <div key={row.id} className={styles.row}>
      <h4 className={styles.title}>{row.name}</h4>
      <div className={styles.fiveSixth}>
        <Progress value={row.value} className={styles.fourFifth} />
      </div>
      <div className={styles.oneSixth}>
        <span className={styles.text}>{row.value}{'% completed'}</span>
      </div>
    </div>
  ));
}
