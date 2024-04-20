import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
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

export const Sidebar = () => {
  // const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSidebarFixed(window.innerWidth >= 1200);
  //   };

  //   handleResize(); // Initial check
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="container">
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
      </div>
    </div>
  );
};
