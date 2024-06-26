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
            <div className="hero-section " id="home">
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
            <div className="about-section" id="about">
              <span class="badge rounded-5">
                <i class="fa-solid fa-user"></i>&nbsp; ABOUT
              </span>
              <h2>
                Crafting Stories{" "}
                <span class="name_heading">Through Design</span>
              </h2>
              <p class="sub_heading">
                Ever since I embarked on my journey as a creative designer, I've
                been driven by the power of storytelling. I've had the privilege
                of collaborating with talented individuals to bring digital
                experiences to life, working on projects that resonate with
                users and leave a lasting impact. With a blend of confidence and
                curiosity, I approach each design challenge as an opportunity
                for growth, constantly refining my craft one project at a time.
              </p>
            </div>
            <div className="resume-section" id="resume">
              <span class="badge rounded-5">
                <i class="fa-solid fa-briefcase"></i>&nbsp; RESUME
              </span>
              <h2>
                Education & <span class="name_heading">Experience</span>
              </h2>
              <ul class="timeline">
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>27 August, 2023
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">
                    Front End Developer (On-Site)
                  </h2>
                  <p class="text-small mt-2 font-weight-light text-gray">
                    Tecizeverything
                  </p>
                </li>
                <li class="timeline-item  rounded ml-3 p-4 shadow">
                  <span class="small resume-date text-gray">
                    <i class="fa fa-clock-o mr-1"></i>1 January, 2023
                  </span>
                  <h2 class="h5 mb-0 resume-subtitle">
                    Front End Developer (Remote)
                  </h2>

                  <p class="text-small mt-2 font-weight-light text-gray">
                    Agric 360 Developers
                  </p>
                </li>
              </ul>
            </div>
            <div className="skills-section" id="skills">
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
            <div className="contact-section" id="contact">
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
            <div className="portfolio-section" id="portfolio">
              <div className="portfolio-content"></div>
            </div>
          </div>

          <div className="sidemenu-section">
            <ul className="side-menu">
              <li>
                <a href="#home">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="social-icons-side-menu"
                  />
                </a>
              </li>
              <li>
                <a href="#about">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="social-icons-side-menu"
                  />
                </a>
              </li>
              <li>
                <a href="#resume">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="social-icons-side-menu"
                  />
                </a>
              </li>
              <li>
                <a href="#skills">
                  <FontAwesomeIcon
                    icon={faShapes}
                    className="social-icons-side-menu"
                  />
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="social-icons-side-menu"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
