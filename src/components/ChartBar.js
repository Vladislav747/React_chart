import React, { Component } from "react";
import Chart from "chart.js";

class ChartBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    position: "right",
    location: "City"
  };

  chartRef = React.createRef();

  componentDidMount() {
    
  

    const myChartRef = this.chartRef.current.getContext("2d");

    console.log(this.state.chartData.length, "check");
    new Chart(myChartRef, {
      type: "bar",
      data: this.props.chartData,
      options: {
        legend: {
          display: true,
          position: this.props.legendPosition
        },
        scales: {
          xAxes: [
            {
              stacked: true
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        }
      }
    });
    console.log(myChartRef);
  
  }

  shouldComponentUpdate(){
    console.log(this.props.chartData, "searching for props");
    


  }
  render() {
    return (
      <div className="asd">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

export default ChartBar;
