import React from 'react'
import ReactApexChart from "react-apexcharts"



const TopProduct = () => {
  var options = {
    series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
    chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: 'Monthly Inflation in Argentina, 2002',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  }
  };
  return (
    <>
<div className="container-fluid p-0">

     <div className="row">
    <div className="col customerReport">
      <p> 55% </p>
      <p>Total Customers</p>
      <h4>500K</h4>
    </div>
    <div className="col d-flex align-items-end justify-content-end px-3">

<div className="bkcd">
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>


      
</div>


    </div>
     </div>
     <div className="row mt-4">
     <div className="col customerReport">
      <p>25 % </p>
      <p>New Customer this Month</p>
      <h4>500K</h4>
    </div>

    <div className="col d-flex align-items-end justify-content-end px-3">
    <div className="bkcd2">
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>
  <div className="kkkd"></div>


      
</div>


    </div>
     </div>



     
</div>

      
    </>
  )
}

export default TopProduct
