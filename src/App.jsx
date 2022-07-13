import Contact from "./components/contact/Contact";
import About from "./components/intro/about/About";
import Intro from "./components/intro/Intro";
import { ServiceList }  from "./components/serviceList/ServiceList";


const App = () => {
  return (
   <div>
      <Intro/>
        <About/>
      <ServiceList/>
     <Contact/>
    </div>
  );
};

export default App;