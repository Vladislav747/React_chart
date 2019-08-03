export function generateData(data) {

    var deviceTypes = {};

    for(let i in data.data.o) {
      deviceTypes[data.data.o[i].n] = data.data.o[i].o;
      
    }
 
    for(let type in deviceTypes){
      for(let index in deviceTypes[type]){
  
        var weekDate = getDayOfWeek(deviceTypes[type][index].n);
  
        for(let views in deviceTypes[type][index].o){
  
          if(typeof(deviceTypes[type][weekDate]) === 'undefined') {
            deviceTypes[type][weekDate] = {};
          }
  
          if(typeof(deviceTypes[type][weekDate][deviceTypes[type][index].o[views].n]) === 'undefined') {
                deviceTypes[type][weekDate][deviceTypes[type][index].o[views].n] = 0;
          }
  
          deviceTypes[type][weekDate][deviceTypes[type][index].o[views].n] = deviceTypes[type][index].o[views].v;
  
        }
        delete deviceTypes[type][index];
      }
    }
  
    console.log(deviceTypes, "Окончательный массив");



   var obj =  {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Undefined",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)",
          "rgba(153, 153, 153, 0.6)"
        ]
      },
      {
        label: "Kids",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)",
          "rgba(18, 149, 26, 0.6)"
        ]
      },
      {
        label: "Young Adult",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)",
          "rgba(51, 153, 254, 0.6)"
        ]
      },
      {
        label: "Adult",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)",
          "rgba(51, 102, 203, 0.6)"
        ]
      },
      {
        label: "Senior",
        data: [617594, 181045, 153060, 106519, 105162, 95072],
        backgroundColor: [
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)",
          "rgba(220, 57, 18, 0.6)"
        ]
      }
    ]
  };

      console.log(obj, "Мой объект");


    return obj;


  }
  
  function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
  }