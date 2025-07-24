import "./intro.css";

import { useEffect, useState } from "react";

import useWindowDimensions from "../../helpers/WindowDimensions";

export default function Intro() {
  const { height } = useWindowDimensions();

  const [about] = useState(false);

  useEffect(() => {
    if (about === true) {
      window.scrollTo({ top: height, left: 0 });
      console.log(height);
    }
  }, [about, height]);

  const customSummary = {
    width: "80vw",
    height: "1px",
    marginLeft: "10vw",
    marginBottom: "5vh",
    background:
      "linear-gradient(to right, white 50%, rgb(255, 255, 255, 0.3) 50%)",
    backgroundSize: "200% 100%",
  };

  return (
    <div>
      <div id="home" className="main_home_container">
        <div className="cygirl_picture_mobile"></div>

        <div className="hey_text_div_intro_mobile">
          <h1
            className="hey_text_mobile"
            style={{ fontFamily: "Monoton, sans-serif" }}
          >
            Hey there! <br />
            I&apos;m Sujith.
          </h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">but that&apos;s not all I am!</h2>
          <h2 className="hey_desc_mobile semibold">mildly chaotic</h2>
        </div>

        <a href="#about">
          <div className="about_button_mobile2">ABOUT</div>
        </a>

        <a
          href="https://drive.google.com/file/d/1hmPvuxC1FNg6S02SCPiNxP72obQ9wTIe/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <div className="about_button_mobile2">RESUME</div>
        </a>
      </div>

      <div id="about" className="about_container_mobile">
        <h3 className="about_heading_mobile">- ABOUT</h3>
        <h1 className="about_title1_mobile">
          I&apos;m an
          <br />
          aspiring...
        </h1>
        <h3 className="about_heading_mobile">bit of pretty much everything.</h3>

        <p className="about_content_mobile">
          I&apos;m someone who enjoys experimenting my way through tech, design,
          writing, and all the chaos in between. My mind runs on side projects,
          half-baked ideas, and late-night sparks that usually turn into
          something (eventually). I think best when I&apos;m building things —
          or thinking about building things — even if half of them end up in
          some forgotten folder.
          <br />
          <br />
          I tend to fall into deep dives on random topics — whether it&apos;s
          strange historical moments, simulation theory, or just how people used
          to solve problems before Google.
          <br />
        </p>

        <h1 className="about_title2_mobile">
          I try to do
          <br />
          new things
        </h1>
        <h3 className="about_heading_mobile">...every once in a while.</h3>

        <p className="about_content_mobile" style={{ marginBottom: "20vh" }}>
          At the moment, I&apos;m digging into areas like AI, automation, and
          making digital things feel a little more human. I enjoy building
          things that either make life simpler or make people curious. I avoid
          repetition like it&apos;s a personal enemy — so if you want to know
          what I&apos;ve been working on, it’s probably better to check my
          resume or GitHub instead.
          <br />
          <br />
          Outside of code, I sketch, write, and occasionally get way too excited
          about design systems. I&apos;ve also got an ever-growing list of
          skills I&apos;d love to learn — from animation to carpentry — and if
          you&apos;re learning something weird and need a partner in chaos,
          count me in.
          <br />
          <br />
          Feel free to reach out through any of the links on this site —
          although email is my go-to for keeping anxiety levels manageable.
          <br />
          <br />
          …And in case you&apos;re wondering, yes — I&apos;m from Kerala, India.
          No, I haven&apos;t figured it all out yet. But I&apos;m definitely
          enjoying the mess.
        </p>
      </div>
    </div>
  );
}
