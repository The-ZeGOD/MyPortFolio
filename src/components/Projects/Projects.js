import "./Projects.css"
import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectCardData';


const Projects = () => {
  return (
    <div className="cardContainer">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectData.map((value, index) => {
              return(
                <ProjectCard
                key = {index}
                imgsrc = {value.imgsrc}
                title = {value.title}
                description= {value.description}
                view = {value.view}
                source = {value.source}
                />
              )
            })}
        </div>
    </div>
  )
}

export default Projects