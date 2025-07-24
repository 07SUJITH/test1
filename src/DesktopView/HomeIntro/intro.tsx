import "./intro.css";

import { useState } from "react";
import { FaArrowUp, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Intro() {
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
      {/* THE MAIN INTRO PAGE AND THE ID LINK TO THE ABOUT PAGE */}

      <div id="home" className="main_home_container">
        {/* <div className="page_number">01</div> */}
        <div className="cygirl_picture"></div>

        <a
          href="#about"
          onMouseEnter={() => setSummaryColor1(1)}
          onMouseLeave={() => setSummaryColor1(0)}
          className="intro_box1"
        >
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white_bottom">About</h3>
            <h3 className="summary_description_white_bottom">01A</h3>
            <div style={customSummary1}></div>
          </div>
        </a>

        <a
          href="https://drive.google.com/file/d/1hmPvuxC1FNg6S02SCPiNxP72obQ9wTIe/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setSummaryColor2(1)}
          onMouseLeave={() => setSummaryColor2(0)}
          className="intro_box2"
        >
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white_bottom">Resume</h3>
            <h3 className="summary_description_white_bottom">01B</h3>
            <div style={customSummary2}></div>
          </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            Hey there!
            <br />
            I&apos;m Sujith.
          </h1>
        </div>
      </div>

      {/* THE ABOUT PAGE BELOW THE MAIN INTRO PAGE */}

      <div id="about" className="about_container">
        <div className="about_all_content">
          <div>
            <h3 className="about_heading">- ABOUT</h3>
            <h1 className="about_title1">
              I&apos;m an
              <br />
              aspiring...
            </h1>
            <h3 className="about_heading">bit of pretty much everything.</h3>

            <p className="about_content">
              I&apos;m someone who enjoys experimenting my way through tech,
              design, writing, and all the chaos in between. My mind runs on
              side projects, half-baked ideas, and late-night sparks that
              usually turn into something (eventually). I think best when
              I&apos;m building things — or thinking about building things —
              even if half of them end up in some forgotten folder.
              <br />
              <br />
              I tend to fall into deep dives on random topics — whether
              it&apos;s strange historical moments, simulation theory, or just
              how people used to solve problems before Google.
              <br />
            </p>

            <h1 className="about_title2">
              I try to do
              <br />
              new things
            </h1>
            <h3 className="about_heading">...every once in a while.</h3>

            <p className="about_content">
              At the moment, I&apos;m digging into areas like AI, automation,
              and making digital things feel a little more human. I enjoy
              building things that either make life simpler or make people
              curious. I avoid repetition like it&apos;s a personal enemy — so
              if you want to know what I&apos;ve been working on, it’s probably
              better to check my resume or GitHub instead.
              <br />
              <br />
              Outside of code, I sketch, write, and occasionally get way too
              excited about design systems. I&apos;ve also got an ever-growing
              list of skills I&apos;d love to learn — from animation to
              carpentry — and if you&apos;re learning something weird and need a
              partner in chaos, count me in.
              <br />
              <br />
              Feel free to reach out through any of the links on this site —
              although email is my go-to for keeping anxiety levels manageable.
              <br />
              <br />
              …And in case you&apos;re wondering, yes — I&apos;m from Kerala,
              India. No, I haven&apos;t figured it all out yet. But I&apos;m
              definitely enjoying the mess.
              <br />
            </p>

            <br />
            <br />
          </div>
        </div>

        <div className="about_contact_links ">
          <a href="#home">
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
            style={{ display: "flex", alignItems: "center", paddingTop: "5vh" }}
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
            style={{ display: "flex", alignItems: "center", paddingTop: "5vh" }}
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
  );
}
