import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { OpenFeedbackDrawer } from "phospho-ui-react";

function App() {
  const [feedback, setFeedback] = React.useState<string | null>(null);

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body">
        <p>Hello</p>
        <OpenFeedbackDrawer />
      </body>
    </div>
  );
}

export default App;
