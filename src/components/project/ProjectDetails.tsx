import React from "react";
import { RouteComponentProps } from "react-router-dom";

export interface MatchParams {
  id: string;
}

const ProjectDetails: React.FC<RouteComponentProps<MatchParams>> = props => {
  const { id } = props.match.params;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quisquam animi praesentium dolorem exercitationem quos rem ipsa
            magni dolores voluptatum, vitae, recusandae dicta est fuga minus
            debitis. Possimus, voluptatem ab.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by The Author</div>
          <div>29th December, 5 PM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
