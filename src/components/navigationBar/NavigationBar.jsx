import React from 'react'
import { useState } from 'react'
import "./NavigationBar.scss"

const NavigationBar = () => {

  //const [active, setActive] = useState(false);

  return (
    <div className="navigationbar">
      <div className="container">
        <div className="logo">
          {/* this is coming from react-router */}
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link>  */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a seller</span>
          <span>Sign in</span>

          <button>Join</button>
        </div>
      </div>

      <hr />

      <div className="menu">
        <span>Test</span>
        <span>Test2</span>
      </div>
    </div>
  )
}

export default NavigationBar
