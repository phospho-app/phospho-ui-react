import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FeedbackDrawer, Feedback } from "phospho-ui-react";
import "phospho-ui-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeedbackDrawer
          title="Send Feedback"
          description="Help us improve our product."
          onSubmit={(feedback: Feedback) =>
            console.log("Submitted: ", feedback)
          }
          onClose={(feedback: Feedback) => console.log("Closed: ", feedback)}
          source={"user"}
        />
      </header>
    </div>
  );
}

export default App;
