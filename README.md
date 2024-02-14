# phospho-ui-react

Add a user feedback component to leverage phospho logging

## Usage

1. Register on (phospho.ai)[https://phospho.ai] and note down the project id
2. Setup phospho logging in your LLM app
3. Use the task_id linked to the log to also attach user feedback.

```javascript
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
```

Under the hood, you can use the `sendUserFeedback` function to register feedbacks to phospho.

Learn more in the [phospho documentation.](https://docs.phospho.ai/guides/user-feedback)
