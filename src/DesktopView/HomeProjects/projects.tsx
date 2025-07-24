import "./projects.css";

import { useState } from "react";
import { FaArrowUp, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ProjectList from "./projectList";

export default function Projects() {
  const [summaryColor1, setSummaryColor1] = useState(0);
  const [summaryColor2, setSummaryColor2] = useState(0);

  const customSummary1 = {
    width: "16vw",
    height: "2px",
    cssFloat: "left",
    background:
      "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
    backgroundSize: "200% 100%",
    transition: "all 1s ease",
    backgroundPosition: summaryColor1 ? "left bottom" : "right bottom",
  };

  const customSummary2 = {
    width: "16vw",
    height: "2px",
    cssFloat: "left",
    background:
      "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
    backgroundSize: "200% 100%",
    transition: "all 1s ease",
    backgroundPosition: summaryColor2 ? "left bottom" : "right bottom",
  };

  return (
    <div>
      <div id="projects" className="main_projects_container">
        <div className="buildingart_picture"></div>

        <a
          href="#projects_list"
          onMouseEnter={() => setSummaryColor1(1)}
          onMouseLeave={() => setSummaryColor1(0)}
          className="intro_box1"
        >
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white_bottom">Browse</h3>
            <h3 className="summary_description_white_bottom">03A</h3>
            <div style={customSummary1}></div>
          </div>
        </a>

        <a
          href="https://www.github.com/07SUJITH"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setSummaryColor2(1)}
          onMouseLeave={() => setSummaryColor2(0)}
          className="intro_box2"
        >
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white_bottom">Github</h3>
            <h3 className="summary_description_white_bottom">03B</h3>
            <div style={customSummary2}></div>
          </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            Sometimes, <br />I code.
          </h1>
        </div>
      </div>

      {/* THE PROJECTS STUFF BELOW THE MAIN PROJECTS INTRO PAGE */}

      <div id="projects_list" className="projects_container">
        <div className="projects_all_content">
          <h3 className="projects_heading">- Projects</h3>

          <h1 className="projects_title1">Mockups</h1>

          <br />
          <br />
          <br />

          <ProjectList />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="about_heading">
            This is all for now! Others on github will be added here at some
            point.
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="about_contact_links ">
            <a href="#projects">
              <FaArrowUp
                size={"5vmin"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "0",
                  margin: "0",
                  paddingTop: "5vh",
                  height: "fit-content",
                  paddingBottom: "5vh",
                }}
              />
            </a>
            <a
              href="mailto:sujithts000777@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegEnvelope
                size={"5vmin"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "0",
                  margin: "0",
                }}
              />
            </a>
            <a
              href="https://x.com/SujithTS07"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "5vh",
              }}
            >
              <FaXTwitter
                size={"5vmin"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "0",
                  margin: "0",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/07sujithts/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "5vh",
              }}
            >
              <FaLinkedin
                size={"5vmin"}
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "0",
                  margin: "0",
                  // paddingTop: "5vh",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
