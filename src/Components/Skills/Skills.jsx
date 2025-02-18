import "./Skills.css";
const Skills = () => {
  return (
    <div className="Skills  container">
      <div>
        <p className="skillsTitle">MY SPECIALTY</p>
        <h3>MY SKILLS</h3>
        <p className="skillsText">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn’t listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>
      </div>

      <div className="itemsSkils row">
        <div className="col-md-6">
          <div className="blue mb-3 ">
            <div className="item d-flex justify-content-between">
              <h5>Photoshop</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-blue progress-bar "
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="yellow mb-3">
            <div className="item d-flex justify-content-between">
              <h5>HTML</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-yellow progress-bar "
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="green  mb-3">
            <div className="item d-flex justify-content-between">
              <h5>CSS</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-green progress-bar "
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="red mb-3">
            <div className="item d-flex justify-content-between">
              <h5>jQuery</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-red progress-bar "
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="bnfsge mb-3">
            <div className="item d-flex justify-content-between">
              <h5>CSS3</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-bnfsge progress-bar "
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="scand mb-3">
            <div className="item d-flex justify-content-between">
              <h5>SEO</h5>
            </div>
            <div className="progress" style={{ height: "6px" }}>
              <div
                className="bg-scand progress-bar "
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
