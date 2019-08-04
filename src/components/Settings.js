import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps = {
    deviceTypes: {}
  };

  handleChange() {
    var checkBoxes = document.getElementsByClassName("settingsPhone");
    var checkedDevices = [];

    for (let element in checkBoxes) {
      if (checkBoxes[element].checked) {
        checkedDevices.push(checkBoxes[element].value);
      }
    }

    this.props.updateData(checkedDevices);
  }

  render() {
    return (
      <div className="settings">
        <div className="listPhones">
          <div className="listPhones-types">
          {this.props.deviceTypes.map((curr, i) => (
              <div className="listPhones-type">
            <label key={i} htmlFor={"checkbox_"+i}>
              {curr}
              <input
                type="checkbox"
                className="settingsPhone"
                key={i}
                onChange={this.handleChange}
                value={curr}
                id={"checkbox_"+i}
                defaultChecked="true"
              />
            </label>
            <div className="listPhones-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
            </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
