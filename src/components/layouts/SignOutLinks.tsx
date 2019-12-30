import React from "react";
import { NavLink } from "react-router-dom";

const SignOutLinks: React.FC = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/sinup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignOutLinks;
