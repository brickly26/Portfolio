import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer'


function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe")

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header />
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main>
            {renderPage()}
      </main>
      <Footer />
    </>
  ) 
}

export default App;
