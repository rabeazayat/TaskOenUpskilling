import "./About.css";
const About = () => {
  return (
    <div className=" container About">
      <h6 className="aboutTitle">ABOUT US</h6>
      <div className="dis">
        <h3 className="aboutHeading">WHO AM I?</h3>
        <p className="aboutText">
          Hi Im Jackson Ford On her way she met a copy. The copy warned the
          Little Blind Text, that where it came from it would have been
          rewritten a thousand times and everything that was left from its
          origin would be the word (and) and the Little Blind Text should turn
          around and return to its own, safe country.
        </p>
        <p className="aboutText">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="crd">
                <i className="fa-regular fa-lightbulb"></i>
                <h3>Graphic Design</h3>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="crd red">
                <i className="fa-solid fa-earth-africa "></i>
                <h3>Web Design</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="crd yellow">
                <i className="fa-solid fa-database"></i>
                <h3>Software</h3>
              </div>
            </div>

            <div className="col-md-3 ">
              <div className="crd bnfsge">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h3>Application</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
