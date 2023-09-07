import React, { useState, useEffect } from "react";
import GearIcon from "./gear.png";
import "./Gear.css";

function Gear({
  myCheckBox,
  handleCheckBox,
  transitionTimeState,
  handleTransitionTime,
}) {
  const [settings, setSettings] = useState(false);
  const toggleSettings = () => {
    setSettings(!settings);
  };

  useEffect(() => {
    console.log("checkBox: " + myCheckBox);
  }, [myCheckBox]);

  return (
    <div className="outerDiv">
      {settings ? (
        <div className="outerSettingsDiv">
          <div className="innerSettingsDiv">
            <div className="settingsDiv">
              <div>
                <div className="settingsOptionDiv">
                  <div className="settingsText">
                    Background Image transition speed
                  </div>
                  <div>
                    <input
                      type="text"
                      value={transitionTimeState}
                      onChange={(e) => handleTransitionTime(e.target.value)}
                      className="settingsInput"
                    />
                  </div>
                </div>
                <div className="settingsOptionDiv">
                  <div className="settingsText">
                    Auto background image transition
                  </div>
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={myCheckBox}
                    onChange={() => handleCheckBox()}
                  />
                  <label for="myCheckbox">Check this box</label>
                </div>
              </div>
            </div>
          </div>
          <div className="settingSquare"></div>
        </div>
      ) : null}

      <div className="gearContainer" onClick={toggleSettings}>
        <img src={GearIcon} alt="" className="gear" />
      </div>
    </div>
  );
}

export default Gear;
