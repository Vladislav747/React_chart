import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrChecked:props.deviceTypes
    }

this.handleChange = this.handleChange.bind(this);
}

  static defaultProps = {
    deviceTypes: {}
  };

  handleChange(event){
      console.log("Mock works");
      //var checked = event.target;
      const checkedValue = event.target.value;
      console.log(checkedValue);
      console.log(this.state);
    this.setState({
        arrChecked:this.props.deviceTypes
    });


      this.setState(({ arrChecked }) => {
        let pairs = [...arrChecked];
        console.log(pairs);
        console.log(this.props.deviceTypes);
        if (pairs.includes(String(checkedValue))) {
        pairs = pairs.filter(pair => pair !== checkedValue);
          console.log(pairs);
        } else {
          pairs.push(checkedValue);
          console.log(pairs);
        }
        //Возвращаем state который положили
        return {
          arrChecked: pairs,
        }
      }) 
        
      }
   
  
  render() {

   

    return (
      <div className="settings">
        <div className="listPhones">
          Choose phones
          {this.props.deviceTypes.map(curr => (
            <label>
              {curr}
              <input
               type="checkbox"
               className="settingsPhone" 
                onChange={this.handleChange}
                value={curr}
                checked
               />
            </label>
          ))}
         
        </div>
      </div>
    );
  }
}

export default Settings;
