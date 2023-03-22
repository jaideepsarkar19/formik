import { useState } from "react";
import UserForm from "./components/UserForm";
import CourseForm from "./components/CourseForm";
import "./App.css";

function App() {
  const [view, setView] = useState("userform");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("userform")}
          style={{ color: view === "userform" ? "#fff" : "" }}
        >
          Student Login
        </h3>
        <h3
          onClick={() => setView("courseform")}
          style={{ color: view === "courseform" ? "#fff" : "" }}
        >
          Course
        </h3>
      </nav>
      {view === "basic" ? <UserForm /> : <CourseForm />}
    </div>
  );
}

export default App;
