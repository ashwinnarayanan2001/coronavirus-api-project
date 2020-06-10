import React, {Component} from "react";
import Chart from "react-apexcharts";
import "typeface-pt-sans"

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [89],
      options: {
      chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -300,
        endAngle: 70,
         hollow: {
          margin: 0,
          size: '70%',
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
    
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#FFFFFF',
            fontSize: '25px'
          },
          value: {
            formatter: function(val) {
              return parseInt(val);
            },
            color: '#FFFFFF',
            fontSize: '36px',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#606DFB', '#7B58E6'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Percent'],
  }
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height={350}
      />
    );
  }
}

export default PieChart;
