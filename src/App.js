import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faShapes,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
              <div className="profile-img mt-3 d-flex justify-content-center ">
                <img
                  src={"./images/me.png"}
                  alt="image not found"
                  className="profile-png "
                />
              </div>
              <div className="email-address mt-3">
                <a href="mailto:mshameelkz@gmail.com" className="email">
                  mshameelkz@gmail.com
                </a>
                <div className="address">Karachi, Pakistan</div>
              </div>
              <div className="copyright mt-3 primary-text-color">
                <div className="text-center copyright-text">
                  <a
                    className="primary-text-color text-decoration-none "
                    href="#"
                  >
                    © 2024 M.Shameel. All Rights Reserved
                  </a>
                </div>
              </div>
              <div className="social-media-icons mt-3 ">
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

          <div className="col-xl-7 col-12 ">
            <div className="hero-section ">
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
              <h2>
                Education & <span class="name_heading">Experience</span>
              </h2>
              <ul class="timeline">
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>21 March, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>

                  <p class="text-small mt-2 font-weight-light text-gray">
                    Envato Market
                  </p>
                </li>
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>5 April, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>
                  <p class="text-small mt-2 font-weight-light text-gray">
                    Envato Market
                  </p>
                </li>
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>18 August, 2019
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">Front End Developer</h2>
                  <p class="text-small mt-2 font-weight-light text-gray">
                    Envato Market
                  </p>
                </li>
              </ul>
            </div>
            <div className="skills-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-shapes"></i>&nbsp; MY SKILLS
              </span>
              <h2>
                My<span class="name_heading">Advantages</span>
              </h2>
              <div className="row text-center ">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/html.png" height="65" alt="Html" />
                      <h1 class="percentage">50%</h1>
                    </div>
                    <p class="text-light">HTML</p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/css.png" height="65" alt="Html" />
                      <h1 class="percentage">40%</h1>
                    </div>
                    <p class="text-light">CSS</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img
                        src="./images/javaScript.png"
                        height="65"
                        alt="Html"
                      />
                      <h1 class="percentage">27%</h1>
                    </div>
                    <p class="text-light">JavaScript</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/react.png" height="65" alt="Html" />
                      <h1 class="percentage">30%</h1>
                    </div>
                    <p class="text-light">React</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img
                        src="./images/typeScript.png"
                        height="65"
                        alt="Html"
                      />
                      <h1 class="percentage">20%</h1>
                    </div>
                    <p class="text-light">TypeScript</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/nextJs.jpeg" height="65" alt="Html" />
                      <h1 class="percentage">50%</h1>
                    </div>
                    <p class="text-light">Next JS</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/react.png" height="65" alt="Html" />
                      <h1 class="percentage">20%</h1>
                    </div>
                    <p class="text-light">React Native</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img
                        src="./images/tailwindCss.png"
                        height="65"
                        alt="Html"
                      />
                      <h1 class="percentage">45%</h1>
                    </div>
                    <p class="text-light">Tailwind CSS</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img
                        src="./images/bootstrap.png"
                        height="65"
                        alt="Html"
                      />
                      <h1 class="percentage">50%</h1>
                    </div>
                    <p class="text-light">Bootstrap</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/figma.png" height="65" alt="Html" />
                      <h1 class="percentage">25%</h1>
                    </div>
                    <p class="text-light">Figma</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img src="./images/firebase.png" height="65" alt="Html" />
                      <h1 class="percentage">20%</h1>
                    </div>
                    <p class="text-light">Firebase</p>
                  </div>
                </div>{" "}
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                  <div className="proficiency">
                    <div className="proficiency-content">
                      <img
                        src="./images/circle-github.png"
                        height="65"
                        alt="Html"
                      />
                      <h1 class="percentage">45%</h1>
                    </div>
                    <p class="text-light">Github</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-section">
              <span class="badge rounded-5">
                <i class="fa-solid fa-envelope"></i>&nbsp; CONTACT
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
                          <input
                            type="text"
                            class="form-control border-0"
                            id="fullName"
                            name="fullName"
                            placeholder="Your full name"
                            required=""
                          ></input>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="email">
                            Email<span class="red-star">*</span>
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Your email address"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="phoneNumber">
                            Phone Number
                            <span class="optional ms-1">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            class="form-control"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-xl-0 mb-lg-0 mb-md-0 mb-4">
                        <div class="form-group">
                          <label for="subject">
                            Subject<span class="red-star">*</span>
                          </label>
                          <select
                            class="form-control select_container"
                            id="subject"
                            name="subject"
                            required=""
                          >
                            <option value="">Select Subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Support Request</option>
                            <option value="feedback">Feedback</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="budget">
                            Your Budget
                            <span class="optional ms-1">(optional)</span>
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="budget"
                            placeholder="A range budget for your project"
                            name="budget"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label for="message">
                            Message<span class="red-star">*</span>
                          </label>
                          <textarea
                            class="form-control message"
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Wrire your message here ..."
                            required=""
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div
                      class="row mb-5 aos-init aos-animate"
                      data-aos="fade-right"
                    >
                      <div class="col-md-12">
                        <div class="form-group mt-5">
                          <label
                            for="attachment"
                            class="d-flex align-items-center"
                          >
                            <i class="fa-solid fa-cloud-arrow-up me-3"></i>Add
                            an attachment
                          </label>
                          <input
                            type="file"
                            class="form-control-file d-none"
                            id="attachment"
                            name="attachment"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-blue btn-primary">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="sidemenu-section">
            <ul className="side-menu">
              <li>
                <FontAwesomeIcon
                  icon={faHome}
                  className="social-icons-side-menu"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  className="social-icons-side-menu"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="social-icons-side-menu"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faShapes}
                  className="social-icons-side-menu"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="social-icons-side-menu"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
