import React, { Component } from "react";
import Chart from "chart.js";

class ChartBar extends Component {

  constructor(props) {
    super(props);
    this.createChart = this.createChart.bind(this);
  }

  chartRef = React.createRef();

  createChart(){
    const myChartRef = this.chartRef.current.getContext("2d");
    
    this.setState({chart: new Chart(myChartRef, {
        type: "bar",
        data: this.props.chartData,
        options: {
          legend: {
            display: true,
            position: this.props.legendPosition
          },
          title: {
            display: true,
            text: 'Total views: Age (by day of week)'
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
      })
    });

  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    position: "right",
    location: "City"
  };



  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate(prevProps){

    if(prevProps.chartData !== this.props.chartData){
      this.state.chart.data = this.props.chartData;
      this.state.chart.update();
    }

  }

  render() {
    return (
      <div className="chart">
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }

}

export default ChartBar;
