import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" className="nav-link">
                  Top news <span class="sr-only"></span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                </Link>
              </li>
            </ul>

            <button
              onClick={this.props.action}
              class="btn btn-secondary my-2 my-sm-0"
            >
              US
            </button>
            <span style={{ marginRight: "10px" }}></span>
            <button
              onClick={this.props.action}
              class="btn btn-secondary my-2 my-sm-0"
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
