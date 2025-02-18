import Project1 from "/projectAssets/Project1.jpg";
import Project2 from "/projectAssets/Project2.jpg";
import Project3 from "/projectAssets/Project3.jpg";
import Project4 from "/projectAssets/Project4.jpg";
import Project5 from "/projectAssets/Project5.jpg";
import Project6 from "/projectAssets/Project6.jpg";

import "./work.css";
const Work = () => {
  return (
    <div className="Work container ">
      <p className="workTitle">MY WORK</p>
      <h3>RECENT WORK</h3>
      <ul className="itemWork list-unstyled d-flex g-3 gap-3">
        <li>Graphic Design</li>
        <li>Apps</li>
        <li>Software</li>
      </ul>

      <div className="project container">
        <div className="row">
          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project1} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project2} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project3} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project4} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project5} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item">
              <div className="img">
                <img src={Project6} alt="Project1" />
              </div>

              <div className="box">
                <div className="desc">
                  <h3>
                    <a href="#">Work 02</a>
                  </h3>
                  <p>Animation</p>
                </div>
                <div className="item-icon">
                  <div className="icon">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>

                  <div className="icon">
                    <i className="fa-regular fa-eye"></i>
                    <a href="" className="ms-1">
                      100
                    </a>
                  </div>
                  <div className="icon">
                    <i className="fa-regular fa-heart"></i>
                    <a href="" className="ms-1">
                      49
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
