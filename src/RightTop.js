import "./RightTop.css";
import BarChartIcon from "@material-ui/icons/BarChart";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LinkIcon from "@material-ui/icons/Link";

const RightTop = () => {
  return (
    <div className="right-top">
      <div className="ice-cream"></div>
      <div className="singer">Billie Ellish</div>
      <div className="sub-details">1.5 MB . Modified 3 hours ago</div>
      <div className="icons-1">
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
        <BarChartIcon style={{ color: "rgb(38, 14, 173)" }} />
      </div>
      <div className="icons-2">
        <LinkIcon
          style={{
            color: "rgb(38, 14, 173)",
            backgroundColor: "rgba(159, 152, 196, 0.2)",
            padding: "10px",
            marginRight: "20px",
            borderRadius: "15px",
          }}
        />
        <MoreVertIcon
          style={{
            color: "rgb(38, 14, 173)",
            backgroundColor: "rgba(159, 152, 196, 0.2)",
            padding: "10px",
            borderRadius: "15px",
          }}
        />
        <PlayArrowIcon
          style={{
            color: "white",
            backgroundColor: "rgb(38, 14, 173)",
            padding: "10px",
            borderRadius: "15px",
            marginLeft: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default RightTop;
