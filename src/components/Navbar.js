import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     mode: 'light'
  //   };
  // }

  // toggleMode = ()=> {
  //   if(this.state.mode === 'light'){
  //     this.setState({mode:'dark'});
  //   }
  //   else{
  //     this.setState({mode:'light'});
  //   }
  //   return this.state.mode;
  // }

  

  render() {
    return (
      <>
      
        <nav className= {`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
              <button type="button" onClick={this.props.toggleMode} className={`btn mx-2 btn-${this.props.mode==='dark'?'light':'dark'} shadow-none`}>
              {this.props.mode==='dark'?'Light Mode':'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
