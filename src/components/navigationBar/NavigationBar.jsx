import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./NavigationBar.scss"

const NavigationBar = () => {

  const [active, setActive] = useState(true);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, []);

  const currentUser = {
    id: 1,
    userName: "John Doe",
    isSeller: true
  }

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
          <span>Sign in</span>
          {!(currentUser?.isSeller) && <span >Become a seller</span>}

          {!currentUser && <button>Join</button>}

          {currentUser && (
            <div className="user" onClick={() => setUserOptionsOpen(!userOptionsOpen)}> 
              <img 
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="">
              </img>
              <span>{currentUser?.userName}</span>
              {userOptionsOpen && 
                <div className="options">
                  {/* 2 cases: currentUser is a seller or not */}
                  {
                    currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              }
            </div>
          )}
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
