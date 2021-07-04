import FaceIcon from "@material-ui/icons/Face";
import AddIcon from "@material-ui/icons/Add";
import "./People.css";

const People = () => {
  return (
    <div className="people">
      <div className="plus-icons">
        <FaceIcon
          style={{
            backgroundColor: "#a8f7ca",
            color: "#1cbd52",
            borderRadius: "30px",
            padding: "10px",
          }}
        />
        <FaceIcon
          style={{
            backgroundColor: "#98d1eb",
            color: "#2582e6",
            borderRadius: "30px",
            padding: "10px",
          }}
        />
        <FaceIcon
          style={{
            backgroundColor: "#f5d5e2",
            color: "#d95086",
            borderRadius: "30px",
            padding: "10px",
          }}
        />
        <AddIcon
          style={{
            backgroundColor: "rgba(159, 152, 196, 0.2)",
            color: "rgb(38, 14, 173)",
            borderRadius: "30px",
            padding: "10px",
          }}
        />
      </div>
      <div className="col-2">
        <div classNqme="col-2-1">
          <FaceIcon
            style={{
              backgroundColor: "#f5e8ae",
              color: "#f5d02f",
              borderRadius: "30px",
              padding: "10px",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="col-2-2">
          <span className="name">@Marie</span> We need to make sure to review
          the cover
        </div>
      </div>
      <div className="col-3">
        <div className="col-3-1">
          <FaceIcon
            style={{
              backgroundColor: "#d699f7",
              color: "#430663",
              borderRadius: "30px",
              padding: "10px",
              marginTop: "20px",
            }}
          />
        </div>
        <div className="col-3-2">
          <input
            type="text"
            placeholder="Write a comment"
            style={{ padding: "10px", borderRadius: "10px", width: "200px" }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default People;
