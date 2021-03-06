import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Capacity from './Capacity/Capacity';
import Truck from './Truck/Truck';
import Stakeholders from '../../shared/components/Stakeholders/Stakeholders';
import Notes from '../../shared/components/Notes/Notes';

import styles from './SupplyChainPage.css';
import RPChart from './RPChart/RPChart';

class SupplyChainPage extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.fullPage}>
        <Helmet title="Supply Chain - SCOTT Dashboard" />
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Capacity id="capactiy" />
          </div>
          <div className={styles.oneHalf}>
            <Truck id="truck" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <RPChart id="rpchrt" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.oneHalf}>
            <Stakeholders
              id="stakeholder"
              type="sc"
              name="Supply Chain Level"
            />
          </div>
          <div className={styles.oneHalf}>
            <Notes id="sc" type="sc" name="Supply Chain Level" />
          </div>
        </div>
      </div>
    );
  }
}

export default SupplyChainPage;
