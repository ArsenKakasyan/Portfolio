import React from 'react'
import { LanguageProvider } from "./LanguageContext";
import Navbar from './components/navBar/Navbar.jsx';
import Contact from "./components/contact/Contact.jsx";
import About from "./components/intro/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import { ServiceList }  from "./components/serviceList/ServiceList.jsx";


const App = () => {
  return (

    <LanguageProvider>
      <div>
        <Navbar/>
        <Intro/>
          <About/>
        <ServiceList/>
      <Contact/>
      </div>
    </LanguageProvider>

  );
};

export default App;