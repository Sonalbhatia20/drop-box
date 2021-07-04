import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="data">Home</div>
      <div className="data">Files</div>
      <div className="data">Paper</div>
      <div className="data">Showcase</div>

      <div className="upgrade">
        <div className="text1">Upgrade</div>
        <div className="text2">Account</div>
      </div>

      <div className="last">
        <div className="last1">Personal</div>
        <div className="last2">Only you</div>
      </div>
    </div>
  );
};

export default SideBar;
