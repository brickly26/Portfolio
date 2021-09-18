import React, { useState } from 'react';

function ContactMe({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul>
            <a 
            href="#about-me"
            onClick={() => handlePageChange("AboutMe")}
            >
                <li>About Me</li>
            </a>
            <a 
            href="#work"
            onClick={() => handlePageChange("Projects")}
            >
                <li class="nav-project">My Projects</li>
            </a>
            <a href="#contact-me">
                <li>Contact Me</li>
            </a>
            <a href="https://github.com/brickly26">
                <li>Github</li>
            </a>
        </ul>
    </nav>
  )
}

export default ContactMe