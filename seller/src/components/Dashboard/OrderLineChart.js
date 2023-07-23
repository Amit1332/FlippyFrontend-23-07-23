import React from 'react'
import ReactApexChart from 'react-apexcharts';

const OrderLineChart = () => {
    var state = {
               
      series: [{
        name: 'Orders',
        type: 'column',
        data: [23, 81, 22, 27, 26, 22, 37, 80, 44, 90, 30,20]
      }, {
        name: 'On Delivery',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43,15]
      }, {
        name: 'Canelled',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39,90]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
         foreColor: '#373d3f'
        },
        stroke: {
          width: [0, 2, 2],
          curve: 'smooth',
          dashArray: 10
        },
        plotOptions: {
          bar: {
            columnWidth: '30%',
            borderRadius: 8,
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'last',
          dataLabels: {
            position: 'bottom',
            hideOverflowingLabels: false,
            
            
          }
        }
        },
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100],
          }
        },
        responsive: [{
          breakpoint: 880,
          options: {
            plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 5,
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'last',
          dataLabels: {
            position: 'bottom',
            hideOverflowingLabels: false,
            
            
          }
        }
        },
          
          }
        }],
      
       
    
        fill: {
          colors: ['#164C96', '#F1F8FD', '#9C27B0']
        },
        colors:['#164C96', '#12B76A', '#DC6803'],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
        
            }
          }
        }
      },
      
      
      };
      
     
      
      
    
  return (
    <>
         <div id="chart">
    <ReactApexChart options={state.options} series={state.series} type="bar" height={250}  />
    </div>
    </>
  )
}

export default OrderLineChart
