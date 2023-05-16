import React from 'react'
import { useState } from 'react'
import "./NavigationBar.scss"

const NavigationBar = () => {

  const [active, setActive] = useState(true);

  return (
    <div className={active ? "navigationbar active" : "navigationbar"}>
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
      
      {active && (
      <> {/* use react fragments when using multiple components*/}
        <hr />
        <div className="menu">
          <span>Test</span>
          <span>Test2</span>
        </div>
      </>
      )}
    </div>
  )
}

export default NavigationBar
