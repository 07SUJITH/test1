// CONTAINS CODE FOR STRIPE DESIGN, TOP NAVBAR AND NAVIGATION BETWEEN PAGES & COMPONENT CALLS FOR EVERY OTHER PAGE
import "./navigation.css";

import { useEffect, useState } from "react";

import useWindowDimensions from "../../helpers/WindowDimensions";
import HomeBlog from "../HomeBlo/blog";
import HomeIntro from "../HomeIntro/intro";
import HomeProjects from "../HomeProjects/projects";

export default function Navigation() {
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState(1);

  // ALLOWS NAVIGATION BETWEEN THE THREE MAIN PAGES

  useEffect(() => {
    if (index === 1) {
      window.scrollTo({ top: 0, left: 0 });
    }
    if (index === 2) {
      window.scrollTo({ top: 0, left: width });
    }
    if (index === 3) {
      window.scrollTo({ top: 0, left: width * 2 });
    }
    if (index === 4) {
      window.scrollTo({ top: 0, left: width * 3 });
    }
  }, [index, width]);

  // CREATES THE HOVER ANIMATION OF THE TOP NAVBAR FOR ALL PAGES

  const customProjects = {
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
  };
  const customBlog = {
    borderTop: "2px solid rgba(255, 255, 255, 0.1)",
  };

  return (
    <div>
      {/* STRIPE DESIGN FOR ALL PAGES */}
      <div className="stripe_design">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_00">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_02">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_02a">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#blog">
          <div onClick={() => setIndex(2)} className="back_to_home">
            Back To Blog
          </div>
        </a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_03">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      <div className="stripe_design stripes_slide_03a">
        <div className="border_only_box1"></div>
        <div className="stripes_box1"></div>
        <a href="#projects">
          <div onClick={() => setIndex(3)} className="back_to_home">
            Back To Projects
          </div>
        </a>
        <div className="border_only_box2"></div>
        <div className="stripes_box2"></div>
      </div>

      {/* TOP NAVBAR FOR ALL MAIN PAGES (HOME, BLOG, PROJECTS) */}
      <div className="summary_box">
        <a href="#blog">
          <div
            onClick={() => setIndex(2)}
            style={customBlog}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Blog</h3>
              <h3 className="summary_description_white">
                Messy Thoughts, Meaningful Experiments.
              </h3>
              <h3 className="summary_description_white">02</h3>
            </div>
          </div>
        </a>
        <a href="#projects">
          <div
            onClick={() => setIndex(3)}
            style={customProjects}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Projects</h3>
              <h3 className="summary_description_white">
                Things I built while figuring out how tech works.
              </h3>
              <h3 className="summary_description_white">03</h3>
            </div>
          </div>
        </a>
      </div>

      <div className="summary_box slide2">
        <a href="#home">
          <div
            onClick={() => setIndex(2)}
            style={customBlog}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Home</h3>
              <h3 className="summary_description_white">
                A collection of my thoughts. More like a digital diary.
              </h3>
              <h3 className="summary_description_white">01</h3>
            </div>
          </div>
        </a>
        <a href="#projects">
          <div
            onClick={() => setIndex(3)}
            style={customProjects}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Projects</h3>
              <h3 className="summary_description_white">
                Things I built while figuring out how tech works.
              </h3>
              <h3 className="summary_description_white">03</h3>
            </div>
          </div>
        </a>
      </div>

      <div className="summary_box slide3">
        <a href="#home">
          <div
            onClick={() => setIndex(2)}
            style={customBlog}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Home</h3>
              <h3 className="summary_description_white">
                A collection of my thoughts. More like a digital diary.
              </h3>
              <h3 className="summary_description_white">01</h3>
            </div>
          </div>
        </a>
        <a href="#blog">
          <div
            onClick={() => setIndex(3)}
            style={customProjects}
            className="summary_sub_box_white"
          >
            <div className="line_draw">
              <h3 className="summary_heading_white">Blog</h3>
              <h3 className="summary_description_white">
                Messy Thoughts, Meaningful Experiments.
              </h3>
              <h3 className="summary_description_white">02</h3>
            </div>
          </div>
        </a>
      </div>
      {/* similarly for other section pages  slide4 , slide5  , ...*/}

      {/* CALLING COMPONENTS FOR ALL MAIN PAGES */}
      <div className="home_slides">
        <HomeIntro />
        <HomeBlog />
        <HomeProjects />
      </div>
    </div>
  );
}
