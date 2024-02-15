import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select News Categeory
          </Link>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to="/">General</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment </Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology </Link></li>
            <li><Link className="dropdown-item" to="/business">Business </Link></li>
            <li><Link className="dropdown-item" to="/health">Health </Link></li>
            <li><Link className="dropdown-item" to="/science">Science </Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports </Link></li>





            <li><hr className="dropdown-divider"/></li>
            
          </ul>
        </li>
            </ul>
            <ul className={`navbar-nav ml-auto text-${props.mode==='light'?'dark':'light'}`}>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
