import React from 'react';
import { Column } from '@ant-design/plots';

const AntColumnChart: React.FC = (props) => {
  const {...others } = props;
  // console.log("props", props);
  // console.log('other', others);
  // console.log('props', props)
  const data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  // const config = {
  //   data,
  //   xField: 'type',
  //   yField: 'sales',
  //   xAxis: {
  //     label: {
  //       autoHide: true,
  //       autoRotate: false,
  //     },
  //   },
  //   meta: {
  //     type: {
  //       alias: '类别',
  //     },
  //     sales: {
  //       alias: '销售额',
  //     },
  //   },
  // ...others };
  console.log('AntColumnChar config', props);
  const config =  {
    legend: true,
    ...props
  };
  console.log('AntColumnChar config', config);
  return (
    <Column {...props} />
  );
}

export default AntColumnChart;
