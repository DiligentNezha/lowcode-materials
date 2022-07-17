import React from 'react';
import BizLiquidChart from 'bizcharts/lib/plots/LiquidChart';

function LiquidChart(props) {
  return (
    <BizLiquidChart
      title={{
        visible: true,
        text: '水波图'
      }}
      min={0}
      max={10000}
      value={5639}
			statistic={
        {
          title: {
            customHtml(container, view, item) {
              return '比例'
            }
          },
          content: {
            style: {
              fill: "#000"
            },
            customHtml(container, view, item) {
              return `${(item.percent * 100).toFixed(2)}%`
            }
          }
			  }
			}
      {...props}
    />
  );
}

export default LiquidChart;
