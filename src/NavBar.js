import GamesIcon from "@material-ui/icons/Games";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import FaceIcon from "@material-ui/icons/Face";
import SearchIcon from "@material-ui/icons/Search";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav1">
        <GamesIcon
          style={{
            color: "rgb(38, 14, 173)",
            fontSize: "70px",
            marginTop: "20px",
          }}
        />
      </div>
      <div className="nav2">
        <SearchIcon
          style={{
            fontSize: "30px",
            marginRight: "10px",
            color: "rgb(38, 14, 173)",
          }}
        />
        <input
          type="text"
          placeholder="Search your content"
          style={{
            backgroundColor: "rgba(161, 208, 214, 0)",
            padding: "4px",
            borderRadius: "10px",
            width: "400px",
            border: "none",
          }}
        ></input>
      </div>
      <div className="nav3">
        <NotificationsIcon
          style={{
            fontSize: "35px",
            marginRight: "10px",
            color: "rgb(38, 14, 173)",
          }}
        />
        <FaceIcon
          style={{
            backgroundColor: "#d699f7",
            color: "#430663",
            borderRadius: "30px",
            padding: "10px",
            marginTop: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
