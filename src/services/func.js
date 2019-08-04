export function parseData(data) {

    var deviceTypes = {};
    var deviceLabels = [];
  
    for (let i in data) {
      deviceTypes[data[i].n] = data[i].o;
      deviceLabels.push(data[i].n);
    }
  

    for (let type in deviceTypes) {
      for (let index in deviceTypes[type]) {
        var weekDate = getDayOfWeek(deviceTypes[type][index].n);
  
        for (let views in deviceTypes[type][index].o) {
          if (typeof deviceTypes[type][weekDate] === "undefined") {
            deviceTypes[type][weekDate] = {};
          }
  
          if (
            typeof deviceTypes[type][weekDate][
            deviceTypes[type][index].o[views].n
            ] === "undefined"
          ) {
            deviceTypes[type][weekDate][deviceTypes[type][index].o[views].n] = 0;
          }
  
          deviceTypes[type][weekDate][deviceTypes[type][index].o[views].n] += deviceTypes[type][index].o[views].v;
        }
        delete deviceTypes[type][index];
      }
    }
  
    deviceTypes.deviceLabels = deviceLabels;
  
    return deviceTypes;
  
  }
  
  export function generateChartData(devices, parsedData) {
  
    var currentData = {};
  
    for(let device in parsedData){
      if(devices.indexOf(device) !== -1){
        currentData[device] = parsedData[device];
      }
    }
  
    var ageLabels = {
      'Undefined': "rgba(153, 153, 153, 0.6)",
      'Kids': "rgba(18, 149, 26, 0.6)", 
      'Young Adult': "rgba(51, 153, 254, 0.6)", 
      'Adult': "rgba(51, 102, 203, 0.6)", 
      'Senior': "rgba(220, 57, 18, 0.6)"
    };
  
    var chartData = {};
  
    chartData.labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    chartData.datasets = [];
  
    for(var age in ageLabels) {
  
      let views = calculateViews(age, currentData, chartData.labels);
      let colors = [];
  
      // put colors elements equal count of views
      views.forEach(function() {
        colors.push(ageLabels[age]);
      });


  
      chartData.datasets.push(
        {
          label: age,
          data: views,
          backgroundColor: colors
        }
      );
  
    }
  
    return chartData;
  }
  
  
  function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek)
      ? null
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek];
  }
  
  function calculateViews(age, data, days){
  
    let result = [];
    let currentAge = '';
  
    switch(age){
      case 'Undefined':
        currentAge = 'undefined';
        break;
      case 'Adult':
        currentAge = 'adult';
        break;
      case 'Kids':
        currentAge = 'kid';
        break;
      case 'Young Adult':
        currentAge = 'young';
        break;
      case 'Senior':
        currentAge = 'old';
        break;
        default:
        currentAge = '';
        break;
    }
  
    days.forEach(function(){
      result.push(0);
    });
  
    for(let deviceType in data){
      for(let day in data[deviceType]){
        result[days.indexOf(day)] += data[deviceType][day][currentAge];
      }
    }
  
    return result;
  
  }