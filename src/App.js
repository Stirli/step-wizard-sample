import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { StepWizard } from "./components/StepWizard";

function App() {
  return (
    <div className="App">
      <header className=" container">
        <h1>Hellow World!</h1>
      </header>
      <main className=" container">
        <StepWizard>
          <Step title="Title Step 1" value="Step1 Data" />
          <Step title="Title Step 2" value="Step2 Data" />
        </StepWizard>
      </main>
    </div>
  );
}

function Step({ title, num, value, onChange }) {
  return (
    <div className="card">
      <div className="card-header">Step {num}</div>
      <div className="card-body">
        <div className="card-title">
          <h5>{title}</h5>
        </div>
        <div className="card-text">
          <input
            type="text"
            defaultValue={value}
            onChange={(e) => {
              onChange(e.target.value, e.target.value !== "");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
