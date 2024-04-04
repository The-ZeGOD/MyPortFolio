import React from 'react';
import "./Projects.css";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project imgsrc" />
      <div className="project-content">
        <div className="project-details">
          <h2 className="project-title">{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="project-buttons">
          <NavLink to={props.view} className="btn" target='_blank'>View</NavLink>
          <NavLink to={props.source} className="btn" target='_blank'>Source</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
