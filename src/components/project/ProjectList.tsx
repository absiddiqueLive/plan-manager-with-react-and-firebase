import React from "react";

const ProjectList: React.FC = () => {
  return (
    <div className="project-list section">
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">The Other Project Title</span>
          <p>Posted by The Other Author</p>
          <p className="grey-text">29th December, 1 PM</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">The Project Title</span>
          <p>Posted by The Author</p>
          <p className="grey-text">26th December, 1 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
