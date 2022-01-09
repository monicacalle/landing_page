import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <a className="navbar-brand text-light" href="#">
            Start Bootstrap
          </a>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#">
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
