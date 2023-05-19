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
                    Find the perfect <i>freelance</i> services for your business 
                    {/* <i> is added to put text in italics */}
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./public/images/search.png" alt=""></img>
                        <input type="text" placeholder='Try "building mobile app"'></input>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./public/images/man.png" alt=""></img>
            </div>

        </div>
    </div>
  )
}

export default Featured