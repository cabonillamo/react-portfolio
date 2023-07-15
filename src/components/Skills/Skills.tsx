import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

const Skills = () => {
  const frontendSkillsData = [
    { skill: "HTML & CCS", percentage: 90 },
    { skill: "Javascript", percentage: 92 },
  ];

  const backendSkillsData = [
    { skill: "SQL", percentage: 70 },
    { skill: "ASP .NET Entity Framework", percentage: 80 },
  ];

  const [frontendProgress, setFrontendProgress] = useState(0);
  const [backendProgress, setBackendProgress] = useState(0);

  useEffect(() => {
    const frontendInterval = setInterval(() => {
      setFrontendProgress((prevProgress) => {
        if (prevProgress >= frontendSkillsData[0].percentage) {
          clearInterval(frontendInterval);
          return frontendSkillsData[0].percentage;
        } else {
          return prevProgress + 1;
        }
      });
    }, 20);

    const backendInterval = setInterval(() => {
      setBackendProgress((prevProgress) => {
        if (prevProgress >= backendSkillsData[0].percentage) {
          clearInterval(backendInterval);
          return backendSkillsData[0].percentage;
        } else {
          return prevProgress + 1;
        }
      });
    }, 20);

    return () => {
      clearInterval(frontendInterval);
      clearInterval(backendInterval);
    };
  }, []);

  return (
    <div className="skills-container bg-gray-100">
      <h2 className="skills-title text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Habilidades
      </h2>
      <div className="skills-columns">
        <div className="skills-column">
          <h2 className="column-title">Frontend</h2>
          {frontendSkillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3 className="skill-name">{skill.skill}</h3>
              <div className="progressbar-wrapper">
                <CircularProgressbar
                  value={frontendProgress}
                  text={`${skill.percentage}%`}
                  strokeWidth={6}
                  circleRatio={0.7}
                  styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: "butt",
                    trailColor: "#eee",
                  })}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="skills-column">
          <h2 className="column-title">Backend</h2>
          {backendSkillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <h3 className="skill-name">{skill.skill}</h3>
              <div className="progressbar-wrapper">
                <CircularProgressbar
                  value={backendProgress}
                  text={`${skill.percentage}%`}
                  strokeWidth={6}
                  circleRatio={0.7}
                  styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: "butt",
                    trailColor: "#eee",
                  })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
