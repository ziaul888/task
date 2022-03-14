import React from "react";

const TopNav = () => {
  return (
    <div id="content">
      <div className="top-navbar">
        <div className="xp-topbar">
          <div className="row">
            <div className="col-2 col-md-1 col-lg-1 order-2 order-md-1 align-self-center">
              <div className="xp-menubar">
                <span className="material-icons text-white">signal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="xp-breadcrumbbar text-center">
          <h4 className="page-title">Dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
