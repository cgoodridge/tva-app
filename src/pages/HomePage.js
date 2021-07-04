import React from 'react';

const HomePage = () => (
    <>
        <div className="heroSection">
            <h1 className="heroText">Welcome to the <br/> <span className="heroStyle">T</span>ime <span className="heroStyle">V</span>ariance <span className="heroStyle">A</span>uthority</h1>
        </div>

        <div className="videoHeading">
            <h2>Orientation Video</h2>
        </div>
        <div className="videoSection">
            <iframe className="responsive-iframe" width="760" height="515" src="https://www.youtube-nocookie.com/embed/5vpCIadly88?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </>
    
)

export default HomePage;