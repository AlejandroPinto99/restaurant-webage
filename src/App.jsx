import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  return (
<div>
    <button onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en": "es")}>
      {i18n.language === "es" ? "ES": "EN"}
    </button>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
  )
} ;

export default App;
