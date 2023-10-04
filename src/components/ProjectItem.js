import React from "react";

function ProjectItem({ xyz, name, about, technologies }) {
  //console.log(technologies);
  console.log(xyz);

  const technologySet = technologies.map((element, index) => {
    return <span key={index}>{element}</span>;
  });

  //console.log(technologySet);

  return (
    <div key={xyz} className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologySet}</div>
    </div>
  );
}

export default ProjectItem;
