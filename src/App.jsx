import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) =>{
    i18n.changeLanguage(language);
  }

  return(
    <div className="App">
      <button onClick={()=> changeLanguage("en")} >EN</button>
      <button onClick={()=> changeLanguage("th")} >TH</button>
      <hr></hr>
      <div>{t("Hello")}</div>
    </div>
  )
}

export default App
