import React, { Component } from "react";
import Chart from "chart.js";

class ChartBar extends Component {



   createChart(self){
    const myChartRef = self.chartRef.current.getContext("2d");
  
    new Chart(myChartRef, {
      type: "bar",
      data: self.props.chartData,
      options: {
        legend: {
          display: true,
          position: self.props.legendPosition
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

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    position: "right",
    location: "City"
  };

  chartRef = React.createRef();

  componentDidMount() {

    var self = this;
    this.createChart(self);
    
  }

  componentDidUpdate(prevProps){

    if(prevProps.chartData !== this.props.chartData){
     var self = this;
      this.createChart(self);
    }
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
