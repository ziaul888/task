import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <span>deshboard</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard" className="dashboard">
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/productpage" className="dashboard">
              <span>product</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
