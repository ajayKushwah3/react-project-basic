import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import classes from '../../assets/css/b.module.css';

const ChartA = () => {

  const [isState, setIsState] = useState({
    series: [75, 50, 25],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        stroke: {
          lineCap: "round",
        },
        colors:['#00A0E9', '#B033AB', '#F39800'],
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: '0',
              },
              value: {
                fontSize: '0',
              },
              total: {
                show: false,
                // label: 'Total',
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  // return 249
                }
              }
            }
          }
        },
        labels: ['', '', '', ''],
      },
  });
  return (
    <div className={`${classes['chartBox']} ${classes['chartBBox']}`}>
      <ReactApexChart options={isState.options} series={isState.series} type="radialBar" height={220} />
    </div>
  )
}

export default ChartA
