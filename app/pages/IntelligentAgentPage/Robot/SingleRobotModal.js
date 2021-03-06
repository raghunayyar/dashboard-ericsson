import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Robot.css';
import Progress from '../../../ui/Progress/Progress';
import Checkbox from '../../../ui/Form/Checkbox';

import { UPDATE_ROBOTS_HIGHLIGHT } from '../../../entities/robot/actions';

class SingleRobotModal extends Component {
  constructor(props) {
    super(props);
    this._handleHighlight = this._handleHighlight.bind(this);
  }

  _handleHighlight(data) {
    const { dispatch } = this.props;
    dispatch({
      type: UPDATE_ROBOTS_HIGHLIGHT,
      payload: {
        id: data.id,
        highlightedRobot: !data.highlightedRobot,
      },
    });
  }

  render() {
    const { robots } = this.props;
    return robots.valueSeq().map(row => {
      return (
        <div key={row.id} className={styles.oneRobot}>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <h4 className={styles.title}>
                {row.name}{' - '}{row.to.name}{' from '}{row.from.name}
              </h4>
            </div>
            <div className={styles.oneSixth}>
              <div className={styles.checkboxRobot}>
                <Checkbox
                  id={row.id}
                  checked={row.highlightedRobot}
                  name="Highlight Entity"
                  onChange={() => this._handleHighlight(row)}
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.fiveSixth}>
              <Progress value={row.value} reverse />
            </div>
            <div className={styles.oneSixth}>
              <span className={styles['text-modal']}>
                {row.value}{'% over'}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default connect()(SingleRobotModal);
