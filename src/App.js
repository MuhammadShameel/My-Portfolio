import "./App.css";
// import { SocialIcon } from "react-social-icons/component";
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
      <div className="container">
        <div className="row">
          <div className="col-3">
            {/* Sidebar  */}
            <div className="sidebar mt-1 rounded-5">
              <div className="title">
                <div className="my-name">M.Shameel</div>
                <div className="front-end-developer">(Front-End-Developer)</div>
              </div>
              <div className="profile-img mt-4">
                <img
                  src={"./images/me.png"}
                  alt="image not found"
                  className="profile-png"
                />
              </div>
              <div className="email-address mt-4">
                <a href="mailto:mshameelkz@gmail.com" className="email">
                  mshameelkz@gmail.com
                </a>
                <div className="address">Karachi, Pakistan</div>
              </div>
              <div className="copyright mt-4 primary-text-color">
                <div class="text-center copyright-text">
                  <a class="primary-text-color text-decoration-none " href="#">
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
          <div className="col-9">zain sheikh</div>
        </div>
      </div>
    </div>
  );
}

export default App;
