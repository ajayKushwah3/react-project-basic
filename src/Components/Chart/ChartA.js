import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import classes from '../../assets/css/b.module.css';

const ChartA = () => {

  const [isState, setIsState] = useState({
    series: [{
      name: "Current sales",
      data: [100, 60, 70, 20, 53,]
    },
    {
      name: "Sales Target",
      data: [30, 61, 82, 52, 43, ]
    },
    {
      name: 'Last month sales',
      data: [50, 20, 44, 69, 75, ]
    }
  ],
  options: {
    chart: {
      height: 220,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#C83B53", "#ED9013", "#A82CD0"],
    stroke: {
      width: [5, 5, 5],
      curve: 'smooth',
      dashArray: [0, 0, 0]
    },
   
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      // tooltipHoverFormatter: function(val, opts) {
      //   return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      // }
    },
    
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    yaxis: {
      labels: {
          show: false,
      },
    },
    xaxis: {
      categories: ['week 1', 'week 2', 'week 3', 'week 4', 'week 5'
      ],
    },
 
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 7,
      
    }
  },
  });
  return (
    <div className={`${classes['chartBox']} ${classes['border3px']}`}>
      <ReactApexChart options={isState.options} series={isState.series} type="line" height={220} />
    </div>
  )
}

export default ChartA
