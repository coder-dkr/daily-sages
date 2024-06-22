import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">{this.props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-unstyled">
                <li className="nav-item">
                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending my-3 text-gray  " : isActive ? "active nav-link text-white" : ""
                  } aria-current="page" to="/home">{this.props.home}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending   " : isActive ? "active nav-link text-white" : ""
                  }  to="/about">{this.props.about}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending]  " : isActive ? "active nav-link text-white" : ""
                  } to="/more">{this.props.more}</NavLink>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-light" type="submit">search</button>
              </form>
            </div>
          </div>
        </nav>


      </>
    )
  }
}
