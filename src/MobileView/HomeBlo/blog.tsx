import "./blog.css";

import { useEffect, useState } from "react";

import useWindowDimensions from "../../helpers/WindowDimensions";

export default function Blog() {
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
      <div id="blog" className="main_blog_container">
        <div className="songcircle_picture_mobile"></div>

        <div className="hey_text_div_mobile">
          <h1 className="hey_text_mobile">Blog</h1>
          <div style={customSummary}></div>
          <h2 className="hey_desc_mobile">I write,</h2>
          <h2 className="hey_desc_mobile">sometimes</h2>
        </div>

        <a href="https://medium.com/" target="_blank" rel="noreferrer">
          <div className="about_button_mobile2">MEDIUM</div>
        </a>
      </div>
    </div>
  );
}
