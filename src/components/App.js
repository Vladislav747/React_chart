import React, { Component } from "react";
import "../scss/App.css";
import axios from "axios";
import ChartBar from "./ChartBar";
import Settings from "./Settings";
import { parseData, generateChartData } from "../services/func";

class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {},
      deviceTypes: [],
      parsedData: {}
    };

    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    this.getData().then( response => {
      
      this.setState({parsedData: parseData(response.data.data.o)});
      var chartData = generateChartData(this.state.parsedData.deviceLabels, this.state.parsedData);

      
      this.setState({
        deviceTypes: this.state.parsedData.deviceLabels,
        chartData: chartData
      });
    
    });
  }

  /*Пересчет данных  при выборе опции в компоненте Settings*/
  updateData = (devices) => {
    var data = generateChartData(devices, this.state.parsedData);
    this.setState({chartData: data});
  }

  /*Получение данных*/
  async getData (){
    const url = "https://analytics.3divi.ru/api/v2/statistics/user/43/devices/dates/ages/?key=050a11d6e8cf4dc5bac15bae6a14cec4&b=2016/01/01%2000:00:00&e=2016/07/01%2013:00:00&tzo=0";
    const res = await axios(url);
    
    return await res;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Задание</h1>
        </header>
        <div className="chartResult">
          <Settings
            deviceTypes={this.state.deviceTypes}
            updateData = {this.updateData}
          />
          
          <ChartBar
            chartData={this.state.chartData}
            location="Massachusetts"
            legendPosition="bottom"
          />
        </div>
      </div>
    );
  }

  }
export default App;
