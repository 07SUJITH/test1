import "./projects.css";

import { FaGithub } from "react-icons/fa";

import Project1 from "../../img/projects/project1.png";
import Project2 from "../../img/projects/project2.png";

const ProjectList = () => {
  const images = [
    [Project1, "https://github.com/orgs/GradSpace-360/repositories"],
    [Project2, "https://github.com/07SUJITH/quizverse_frontend"],
  ];

  return (
    <div className="iframe-container">
      {images.map(([imgSrc, githubUrl], idx) => (
        <div key={githubUrl}>
          <div>
            <img
              className="iframe-projects-item"
              src={imgSrc}
              alt={`project-${idx}`}
            />
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="github-icon-link"
            >
              <FaGithub
                size={"3vmin"} // Adjust size as needed
                style={{
                  float: "left",
                  marginLeft: "50%",
                  paddingTop: "0",
                  color: "white",
                }}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
