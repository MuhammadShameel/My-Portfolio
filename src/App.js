import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faTwitter,
  faGithub,
  faUpwork,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container mb-5  mt-5">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-12">
            {/* Sidebar  */}
            <div className="col-xl-3 col-lg-3 col-12 sidebar mt-1 rounded-5 ">
              <div className="title">
                <div className="my-name">M.Shameel</div>
                <div className="front-end-developer">(Front-End-Developer)</div>
              </div>
              <div className="profile-img mt-4 d-flex justify-content-center ">
                <img
                  src={"./images/me.png"}
                  alt="image not found"
                  className="profile-png "
                />
              </div>
              <div className="email-address mt-4">
                <a href="mailto:mshameelkz@gmail.com" className="email">
                  mshameelkz@gmail.com
                </a>
                <div className="address">Karachi, Pakistan</div>
              </div>
              <div className="copyright mt-4 primary-text-color">
                <div className="text-center copyright-text">
                  <a
                    className="primary-text-color text-decoration-none "
                    href="#"
                  >
                    © 2024 M.Shameel. All Rights Reserved
                  </a>
                </div>
              </div>
              <div className="social-media-icons mt-4 ">
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
                <FontAwesomeIcon icon={faGithub} className="social-icons" />
                <FontAwesomeIcon icon={faUpwork} className="social-icons" />
                <FontAwesomeIcon icon={faInstagram} className="social-icons" />
              </div>

              <div className="hire-me">
                <Button className="w-100 mt-4 btn-blue rounded-5">
                  <FontAwesomeIcon className="px-1" icon={faEnvelope} />
                  <span className="px-1">HIRE ME!</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-12 ms-5 ">
            <div className="hero-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-house"></i>&nbsp; INTRODUCE
              </span>
              <h1 class="main-text">
                Say Hi from <span class="name_heading">Muhammad Shameel</span>,
                FrontEnd Developer
              </h1>
              <p class="sub_heading">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
              <div className="rotate-image ms-auto ">
                <img
                  src={"./images/round-text.png"}
                  alt="image not found"
                  className="round-text "
                />
              </div>
            </div>
            <div className="about-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-user"></i>&nbsp; ABOUT
              </span>
              <h2>
                Every great design begin with an even{" "}
                <span class="name_heading">better story</span>
              </h2>
              <p class="sub_heading">
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chopsone design problem at a time.
              </p>
            </div>
            <div className="resume-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-briefcase"></i>&nbsp; RESUME
              </span>
              <ul class="timeline">
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>21 March, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>

                  <p class="text-small mt-2 font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula....
                  </p>
                </li>
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>5 April, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>
                  <p class="text-small mt-2 font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula....
                  </p>
                </li>
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>18 August, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>
                  <p class="text-small mt-2 font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque scelerisque diam non nisi semper, et elementum lorem
                    ornare. Maecenas placerat facilisis mollis. Duis sagittis
                    ligula in sodales vehicula....
                  </p>
                </li>
              </ul>
            </div>
            <div className="contact-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-dollar-sign"></i>&nbsp; CONTACT
              </span>
              <h2>
                Let's Work {""}
                <span class="name_heading">Together!</span>
              </h2>
              <h3 class="mb-5">mshameelkz@gmail.com</h3>
              <div>
                <form action="mailto:mshameelkz@gmail.com" method="post">
                  <div className="me-xl-5 me-lg-5 me-md-5 me-0">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="fullName">
                            Full Name<span class="red-star">*</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-1">
            <ul className="side-menu">
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} className="social-icons" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
