import "./blog.css";

import { useState } from "react";

export default function Blog() {
  const [summaryColor2, setSummaryColor2] = useState(0);

  const customSummary2: React.CSSProperties = {
    width: "16vw",
    height: "2px",
    float: "left" as const,
    background:
      "linear-gradient(to right, white 10%, rgb(255, 255, 255, 0.1) 50%)",
    backgroundSize: "200% 100%",
    transition: "all 1s ease",
    backgroundPosition: summaryColor2 ? "left bottom" : "right bottom",
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div id="blog" className="main_blog_container">
        <div className="songcircle_picture"></div>
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setSummaryColor2(1)}
          onMouseLeave={() => setSummaryColor2(0)}
          className="intro_box2"
        >
          <div className="summary_intro_box_white">
            <h3 className="summary_heading_white_bottom">Medium</h3>
            <h3 className="summary_description_white_bottom">02A</h3>
            <div style={customSummary2}></div>
          </div>
        </a>

        <div className="hey_text_div">
          <h1 className="hey_text">
            I write,
            <br />
            sometimes.
          </h1>
        </div>
      </div>
    </div>
  );
}
