import React, { Component } from "react";
import $ from "jquery";
import "../scss/Settings.css";
class Settings extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps = {
    deviceTypes: {}
  };

  /**
   * Обработка клика по опции выбора.
   */
  handleChange(event) {
    var checkedDevices = [];
    var checkBoxes = $('.listPhones-types input[type="checkbox"]');

    checkBoxes.each(function() {
      if ($(this).prop("checked")) {
        checkedDevices.push(this.value);
      }
    });

    $(event.target)
      .next()
      .toggleClass("checked");

    this.props.updateData(checkedDevices);
  }

  render() {
    return (
      <div className="settings">
        <div className="listPhones">
          <div className="listPhones-types">
            {this.props.deviceTypes.map((curr, i) => (
              <div className="listPhones-type" key={"listPhones-type_" + i}>
                <label key={i} htmlFor={"checkbox_" + i}>
                  {curr}
                </label>
                <input
                  type="checkbox"
                  className="settingsPhone"
                  key={"settingsPhone_" + i}
                  value={curr}
                  id={"checkbox_" + i}
                  defaultChecked="true"
                  onChange={this.handleChange}
                />
                <div
                  className="listPhones-icon checked"
                  key={"listPhones-icon_" + i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
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
