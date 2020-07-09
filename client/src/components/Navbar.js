import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse show" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Top news <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
            </ul>

            <button
              onClick={this.props.action}
              className="btn btn-secondary my-2 my-sm-0"
            >
              US
            </button>
            <span style={{ marginRight: "10px" }}></span>
            <button
              onClick={this.props.action}
              className="btn btn-secondary my-2 my-sm-0"
            >
              GB
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
