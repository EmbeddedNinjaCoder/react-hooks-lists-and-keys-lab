import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //console.log(projects);
  // console.log(projects[2].id);
  // console.log(projects[2].name);
  // console.log(projects[2].about);
  // console.log(projects[2].technologies);

  const petProjects = projects.map((element) => {
    return (
      <ProjectItem
        key={element.id}
        xyz={element.id}
        name={element.name}
        about={element.about}
        technologies={element.technologies}
      />
    );
  });

  console.log(petProjects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{petProjects}</div>
    </div>
  );
}

export default ProjectList;
