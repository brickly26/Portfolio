import React from 'react';

function Projects({ currentPage, handlePageChange }) {
  return (
    <section className="section-cards" id="work">
      <div className="title">
          <h2>My Projects</h2>
      </div>
      <div id="main-project">
          <a href="https://naf15.github.io/STKR/">
              <div className="cards" id="project-1">
                  <h4 id="p1-title">SKTR</h4>
              </div>
          </a>
      </div>
      <div id="projects">
          <a href="https://parker-live.herokuapp.com">
              <div className="cards1" id="project-2">
                  <h4 id="p2-title">Parker</h4>
              </div>
          </a>
          <a href="https://tech-blog-ba.herokuapp.com/">
              <div className="cards1" id="project-3">
                  <h4 id="p2-title">Tech Blog</h4>
              </div>
          </a>
          <a href="https://brickly26.github.io/Code-Quiz/">
              <div className="cards1" id="project-4">
                  <h4 id="p2-title">Code Quiz</h4>
              </div>
          </a>
      </div>
    </section>
  )
}

export default Projects