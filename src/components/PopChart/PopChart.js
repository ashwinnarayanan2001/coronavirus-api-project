import React, {Component} from "react";
import Chart from "react-apexcharts";
import "typeface-pt-sans"

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [44, 71, 67],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        fill: {
          colors: ["#6646ED", "#5ED6C3", "#2C50ED"],
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "35px",
                color: "#FFFFFF",
              },
              value: {
                fontSize: "24px",
                color: "#FFFFFF",
              },
              total: {
                show: true,
                label: "Total",
                color: "#FFFFFF",
                formatter: function (w) {
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 250;
                },
              },
            },
          },
        },
        labels: ["Brazil", "Russia", "India"],
      },
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

export default PopChart;
