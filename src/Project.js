import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="home">Home</div>
      <div className="sub">
        <div className="img">
          <div className="one">Scene</div>
          <div className="two">3 mb . 2 hours ago</div>
        </div>

        <div className="sub-sub">
          <div className="Heading">Project</div>
          <div className="subHead">
            We should be ready to reveal the new
            <br />
            <div className="next-line">
              project next week and we are very excited.
            </div>
          </div>
          <input
            type="checkbox"
            className="first-in"
            id="first"
            name="first"
            value="first"
          />
          <label for="first" className="first">
            Creating storyboard
            <span className="mention"> @Bruce Patterson</span>
          </label>
          <br />
          <br />
          <input
            type="checkbox"
            className="first-in"
            id="second"
            name="second"
            value="second"
          />
          <label for="second" className="second">
            Preparing the source files
            <span className="mention"> @Charlie Huff</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Project;
