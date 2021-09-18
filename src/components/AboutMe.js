import React from 'react';

function AboutMe({ currentPage, handlePageChange }) {
  return (
    <section className="section-cards" id="about-me">
      <div className="title">
          <h2>About Me</h2>
      </div>
      <div id="body">
          <p>
            I am a recent college graduate in mathematic, interested in persueing a career in the tech industry. Ive always had a passion for computer, which lead me to take take a few computer science courses throught my academic endevers, but felt as though my knowledge in the feild was spread thin. The columbia engineering bootcamp has solidified CS concepts that I've already learned, but also introduced me into techonolgies which would otherwise been out of reach. 
          </p>
      </div>
    </section>
  )
}

export default AboutMe