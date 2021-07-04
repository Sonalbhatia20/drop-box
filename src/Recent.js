import "./Recent.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import AddIcon from "@material-ui/icons/Add";
import FolderIcon from "@material-ui/icons/Folder";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import ImageIcon from "@material-ui/icons/Image";

const Recent = () => {
  return (
    <div className="recent-comp">
      <div className="first-comp">
        <div className="text">Recent</div>
        <div className="icons">
          <DashboardIcon
            style={{
              color: "rgb(38, 14, 173)",
              backgroundColor: "rgba(159, 152, 196, 0.2)",
              padding: "10px",
              marginRight: "20px",
              borderRadius: "15px",
            }}
          />
          <ReorderIcon
            style={{
              color: "rgb(38, 14, 173)",
              backgroundColor: "rgba(159, 152, 196, 0.3)",
              padding: "10px",
              borderRadius: "15px",
            }}
          />
          <AddIcon
            style={{
              color: "white",
              backgroundColor: "rgb(38, 14, 173)",
              padding: "10px",
              borderRadius: "15px",
              marginLeft: "100px",
            }}
          />
        </div>
      </div>
      <div className="second-comp">
        <div className="icon">
          <FolderIcon
            style={{
              fontSize: "35px",
              color: "rgba(159, 152, 196, 0.8)",
              marginRight: "20px",
            }}
          />
        </div>
        <div className="text"> Project Venus</div>
        <div className="far-text">Folder</div>
      </div>
      <div className="third-comp">
        <div className="icon">
          <MusicNoteIcon
            style={{
              fontSize: "30px",
              backgroundColor: "rgb(270, 180, 169)",
              color: "rgb(38, 14, 173)",
              marginRight: "20px",
              borderRadius: "10px",
              padding: "2px",
            }}
          />
        </div>
        <div className="text"> Billie Ellish </div>
        <div className="far-text"> Music</div>
      </div>
      <div className="fourth-comp">
        <div className="icon">
          <ImageIcon
            style={{
              fontSize: "30px",
              backgroundColor: "rgb(270, 180, 169)",
              color: "rgb(38, 14, 173)",
              marginRight: "20px",
              borderRadius: "10px",
              padding: "2px",
            }}
          />
        </div>
        <div className="text">City Skyline </div>
        <div className="far-text">Picture</div>
      </div>
    </div>
  );
};

export default Recent;
