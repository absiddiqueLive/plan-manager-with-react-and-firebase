import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignOutLinks from "./SignOutLinks";

const Navbar: React.FC = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          My Plan
        </Link>
        <SignedInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
