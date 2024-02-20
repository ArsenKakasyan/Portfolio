import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from "./LanguageContext";
import { Navbar, Intro, About, ServiceList, Contact } from "./components";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <Intro />
        <About />
        <ServiceList />
        <Analytics />
      </div>
    </LanguageProvider>
  );
};

export default App;
