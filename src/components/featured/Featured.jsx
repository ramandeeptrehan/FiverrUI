import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            {/* We have 2 parts of this container: left(text) and right (image) */}
            <div className="left">
                {/* Inside left section, we have a title, etc */}
                <h1>
                    Find the perfect freelance services for your business
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="" alt=""></img>
                        <input type="text" placeholder='Try "building mobile app"'></input>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Featured