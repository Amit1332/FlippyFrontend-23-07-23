import React from 'react'
import ReactApexChart from "react-apexcharts"

const OrderDonutChart = () => {
    var state = {
          
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
          labels: [
            "Direct",
            "Social",
            "Others",
            "Emails",
            "Referals",


          ],

         colors: ['#164C96', '#12B76A', '#F7B84B','#DC6803','#6DA7DF'],
       
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
          legend: {
            position: 'bottom',
          }
        },
      
      
      };
    
  return (
    <>
    <hr className='mt-3'/>
      
      <div id="chart" className='donutchart'>
  <ReactApexChart options={state.options} series={state.series} type="donut"  height={350} />
</div>


    </>
  )
}

export default OrderDonutChart
