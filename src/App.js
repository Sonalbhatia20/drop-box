import "./App.css";
import SideBar from "./SideBar";
import Project from "./Project";
import Recent from "./Recent";
import RightTop from "./RightTop";
import People from "./People";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <div classname="bar1">
        <NavBar />
      </div>
      <div className="bar2">
        <SideBar />
        <div className="sec">
          <Project />
          <Recent />
        </div>
        <div className="v1"></div>
        <div className="thir">
          <RightTop />
          <People />
        </div>
      </div>
    </div>
  );
}

export default App;
