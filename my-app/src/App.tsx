import "./App.css";
import { FeedbackDrawer, Feedback } from "phospho-ui-react";
import "phospho-ui-react/dist/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FeedbackDrawer
          // Get your project_id on phospho
          projectId="..."
          // The task_id logged to phospho
          taskId="..."
          // Source will be also logged to phospho
          source={"user_feedback"}
          // Customize the drawer
          title="Send Feedback"
          description="Help us improve our product."
          onSubmit={(feedback: Feedback) =>
            console.log("Submitted: ", feedback)
          }
          onClose={(feedback: Feedback) => console.log("Closed: ", feedback)}
        />
      </header>
    </div>
  );
}

export default App;
