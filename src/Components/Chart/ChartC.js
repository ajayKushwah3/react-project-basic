import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import classes from '../../assets/css/b.module.css';

const ChartC = () => {

  const [isState, setIsState] = useState({
    series: [{
      name: "Your achievement",
      data: [10, 60, 100, 80, 33,]
    },
    {
      name: "Scalett Johnson",
      data: [30, 101, 82, 52, 43, ]
    },
 
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
    colors: ["#4EE7E8", "#7517F8", ],
    stroke: {
      width: [5, 5],
      curve: 'smooth',
      dashArray: [0, 0]
    },
   fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.4,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: .8,
        stops: [0, 50, 10],
        colorStops: []
      }
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

export default ChartC
