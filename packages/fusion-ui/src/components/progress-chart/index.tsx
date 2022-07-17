import React from 'react';
import BizProgressChart from 'bizcharts/lib/plots/ProgressChart';

function ProgressChart(props) {
  console.info(props);
  props.annotations[0].content = props.percent * 100 + '%';
  return (
    <BizProgressChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      interactions={[{ type: 'element-active' }]}
      {...props}
    />
  );
}

export default ProgressChart;
