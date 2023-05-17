import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import "./NavigationBar.scss"
import { Link } from "react-router-dom"

const NavigationBar = () => {

  const [active, setActive] = useState(false);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

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
    <div className={(active || pathname !=="/") ? "navigationbar active" : "navigationbar"}>
      <div className="container">
        <div className="logo">
          {/* this is coming from react-router */}
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
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
                      <Link to="/mygigs" className="link">Gigs</Link>
                      <Link to="/addGig" className="link">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="link">Orders</Link>
                  <Link to="/messages" className="link">Messages</Link>
                  <Link to="/" className="link">Logout</Link>
                </div>
              }
            </div>
          )}
        </div>
      </div>
      
      {(active || pathname!=="/") && (
      <> {/* use react fragments when using multiple components*/}
        <hr />
        <div className="menu">
          <Link className="link" to="/">
            Graphics & Design
          </Link>
          <Link className="link" to="/">
            Video & Animation
          </Link>
          <Link className="link" to="/">
            Writing & Translation
          </Link>
          <Link className="link" to="/">
            AI Services
          </Link>
          <Link className="link" to="/">
            Digital Marketing
          </Link>
          <Link className="link" to="/">
            Music & Audio
          </Link>
          <Link className="link" to="/">
            Programming & Tech
          </Link>
          <Link className="link" to="/">
            Business
          </Link>
          <Link className="link" to="/">
            Lifestyle
          </Link>
        </div>
      </>
      )}
    </div>
  )
}

export default NavigationBar
