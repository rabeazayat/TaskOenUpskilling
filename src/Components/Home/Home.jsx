import HomeBG1 from "/projectAssets/HomeBG1.jpg";
import HomeBG2 from "/projectAssets/HomeBG2.jpg";

import "./home.css";

const Home = () => {
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" data-bs-interval="2000">
        <div className="carousel-item active">
          <img src={HomeBG1} className="d-block w-100" alt="First slide" />

          <div className="carousel-caption">
            <h5>Rabea Shaban</h5>
            <p>Frontend Developer skilled in React & Web Design.</p>
            <a href="#" className="btn btn-primary">
              View Profile
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={HomeBG2} className="d-block w-100" alt="Second slide" />

          <div className="carousel-caption">
            <h5>Rabea Shaban</h5>
            <p>Backend Developer with expertise in .NET Core & SQL.</p>
            <a href="#" className="btn btn-primary">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
