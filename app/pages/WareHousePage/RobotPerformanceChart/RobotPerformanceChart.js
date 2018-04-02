import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Bar } from '@nivo/bar';

import Card from '../../../ui/Card/Card';

import styles from './RobotPerformanceChart.css';

const DATA = [
  {
    time: '0000',
    arm1: 20,
    arm2: 34,
    robot1: 19,
  },
  {
    time: '0400',
    arm1: 24,
    arm2: 44,
    robot1: 17,
  },
  {
    time: '0800',
    arm1: 18,
    arm2: 51,
    robot1: 16,
  },
  {
    time: '1200',
    arm1: 45,
    arm2: 37,
    robot1: 4,
  },
  {
    time: '1600',
    arm1: 11,
    arm2: 38,
    robot1: 21,
  },
  {
    time: '2000',
    arm1: 0,
    arm2: 0,
    robot1: 0,
  },
  {
    time: '2359',
    arm1: 0,
    arm2: 0,
    robot1: 0,
  },
];

class RobotPerformanceChart extends Component {
  render() {
    const { id } = this.props;
    return (
      <Card title="Robot Performance Over Time" id={id}>
        <div className={styles.row}>
          <div className={styles.oneFull}>
            <Bar
              data={DATA}
              keys={['arm1', 'arm2', 'robot1']}
              indexBy="time"
              margin={{
                top: 50,
                right: 130,
                bottom: 50,
                left: 60,
              }}
              padding={0.4}
              colors="nivo"
              colorBy="id"
              axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Time (24h)',
                legendPosition: 'center',
                legendOffset: 50,
              }}
              axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Performance (%)',
                legendPosition: 'center',
                legendOffset: -50,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#333333"
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  dataFrom: 'keys',
                  anchor: 'top-right',
                  direction: 'row',
                  symbolShape: 'circle',
                  translateX: 10,
                  translateY: -40,
                  itemWidth: 64,
                  itemHeight: 16,
                  itemsSpacing: 5,
                  symbolSize: 16,
                },
              ]}
              maxValue={100}
              height={420}
              width={840}
            />
          </div>
        </div>
      </Card>
    );
  }
}

RobotPerformanceChart.propTypes = {
  id: PropTypes.string,
};

export default RobotPerformanceChart;