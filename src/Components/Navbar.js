import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";
//for function based app remove line 7(export class Navbar extends Component) and add const Navbar = ()=>{} and also remove render()
export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-warning">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Daily-INFO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                {/*<li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>*/}
                <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/">General</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
