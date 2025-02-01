import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Notification from "./components/toastifyNotification/notification";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <Notification />
    </main>
  );
};

export default App;
