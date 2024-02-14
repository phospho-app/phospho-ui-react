import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { OpenFeedbackDrawer } from "phospho-ui-react";
import "phospho-ui-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OpenFeedbackDrawer
          title={"Error when creating project"}
          description={null}
          onSubmit={() => console.log("Submitted")}
          onClose={() => console.log("Closed")}
          source={"user"}
        />
      </header>
    </div>
  );
}

export default App;
