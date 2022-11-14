import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Resume from "./Pages/Resume";
import project from "./data/project";
import classNames from "classnames";
import Project from "./Pages/Project";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Resume project={project} />} />
          <Route path="/project" element={<Project project={project} />} />
        </Routes>
        <div className={classNames("footer", "section")}>
          Ecof<span>&copy;</span>
        </div>
      </div>
    </div>
  );
}

export default App;
