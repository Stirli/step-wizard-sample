import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { StepWizard } from "./components/stepWizard/StepWizard";
import { Step1 } from "./components/stepWizard/Step1";
import { Step2 } from "./components/stepWizard/Step2";


function App() {
  return (
    <div className="App vh-100">
      <header className=" container">
        <h1>Hellow World!</h1>
      </header>
      <main className=" container">
        <StepWizard>
          <Step1 key="step1" value="1"/>
          <Step2 key="step2" value={{data1:2.1,data2:2.2}}/>
        </StepWizard>
      </main>
    </div>
  );
}

export default App;
