import React from "react";

const Projects = () => {
    const viewFirst = () => {
        
    };
    return(
        <>
            <div className="_pro">
                <h1>Projects</h1>
            </div>
            <div className="_view">
                <button id="_show" onClick={viewFirst}>View First</button>
                <button id="_show">View Second</button>
            </div>
        </>
    );
}

export default Projects;