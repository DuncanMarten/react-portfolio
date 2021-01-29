import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>{renderPage(currentPage)}</main>
      <Footer />
    </div>
  );
}

export default App;
