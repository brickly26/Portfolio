import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul>
            <a 
            href="#about"
            onClick={() => handlePageChange("AboutMe")}
            >
                <li className={currentPage === 'AboutMe' ? "nav-project" : ''}>About Me</li>
            </a>
            <a 
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            >
                <li className={currentPage === 'Projects' ? "nav-project" : ''}>My Projects</li>
            </a>
            <a href="#contactMe"
            onClick={() => handlePageChange("ContactMe")}
            >
                <li className={currentPage === 'ContactMe' ? "nav-project" : ''}>Contact Me</li>
            </a>
            <a target="_vlank"href="https://github.com/brickly26">
                <li>Github</li>
            </a>
        </ul>
    </nav>
  )
}

export default Nav