import "./navigation.css";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import useWindowDimensions from "../../helpers/WindowDimensions";
import HomeBlog from "../HomeBlo/blog";
import HomeIntro from "../HomeIntro/intro";
import HomeProjects from "../HomeProjects/projects";

// A reusable component for the animated hamburger menu button
type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  const line1Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };

  const line2Variants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const line3Variants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <motion.button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        width: "25px",
        height: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        position: "absolute",
        top: "5.5vh",
        right: "7vw",
        zIndex: 5,
      }}
      aria-label="Toggle Navigation"
    >
      <motion.div
        style={{
          width: "25px",
          height: "2px",
          background: "white",
          transformOrigin: "center",
        }}
        variants={isOpen ? line1Variants : {}} // Apply variants only if isOpen
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{ width: "25px", height: "2px", background: "white" }}
        variants={line2Variants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        style={{
          width: "25px",
          height: "2px",
          background: "white",
          transformOrigin: "center",
        }}
        variants={isOpen ? line3Variants : {}} // Apply variants only if isOpen
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default function Navigation() {
  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const { width } = useWindowDimensions();

  function toggleVisibility() {
    setNavbarVisibility(!navbarVisibility);
  }

  // Framer Motion variants for the navigation overlay
  const navVariants = {
    hidden: {
      width: 0,
      transition: {
        when: "afterChildren", // Wait for children to animate out before closing
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      width: "100vw",
      transition: {
        when: "beforeChildren", // Animate container first, then children
        staggerChildren: 0.2,
      },
    },
  };

  // Variants for the links inside the overlay
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants for social icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
  };

  const customNavbarEach = {
    padding: "8px 0 15px 0",
    textDecoration: "none",
    color: "white",
    display: "block",
    fontSize:
      width > 991 ? "clamp(5rem, 10vw, 10rem)" : "clamp(4rem, 20vw, 7rem)",
    textAlign: "center",
  };

  const socialIconStyle = {
    color: "white",
    cursor: "pointer",
    margin: width > 991 ? "0 2vw" : "0 5vw",
  };

  return (
    <div>
      <div className="mobile_navbar">
        <MenuButton isOpen={navbarVisibility} onClick={toggleVisibility} />

        <AnimatePresence>
          {navbarVisibility && (
            <motion.div
              style={{
                backgroundColor: "#0C0F0C",
                fontFamily: "'Rozha One', sans-serif",
                height: "100%",
                position: "fixed",
                zIndex: 4,
                top: 0,
                left: 0,
                opacity: 1,
                overflow: "hidden",
                paddingTop: "25vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.a
                href="/"
                onClick={toggleVisibility}
                style={customNavbarEach as React.CSSProperties}
                variants={linkVariants}
              >
                Home
              </motion.a>
              <motion.a
                href="#blog"
                onClick={toggleVisibility}
                style={customNavbarEach as React.CSSProperties}
                variants={linkVariants}
              >
                Blog
              </motion.a>
              <motion.a
                href="#projects"
                onClick={toggleVisibility}
                style={customNavbarEach as React.CSSProperties}
                variants={linkVariants}
              >
                Projects
              </motion.a>

              <motion.div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "5vh",
                }}
                variants={iconVariants} // Use iconVariants to animate the whole container
              >
                <motion.a
                  href="https://www.github.com/07SUJITH"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <FaGithub
                    size={width > 991 ? "4vw" : "8vw"}
                    style={socialIconStyle}
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/07sujithts/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <FaLinkedin
                    size={width > 991 ? "4vw" : "8vw"}
                    style={socialIconStyle}
                  />
                </motion.a>
                <motion.a
                  href="https://x.com/SujithTS07"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                >
                  <FaXTwitter
                    size={width > 991 ? "4vw" : "8vw"}
                    style={socialIconStyle}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="home_slides">
        <div>
          <HomeIntro />
        </div>
        <div>
          <HomeBlog />
        </div>
        <div>
          <HomeProjects />
        </div>
      </div>
    </div>
  );
}
