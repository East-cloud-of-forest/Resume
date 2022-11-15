import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Resume from "./Pages/Resume";
import project from "./data/project";
import classNames from "classnames";
import Project from "./Pages/Project";
import { useState } from "react";
import Error from "./Pages/Error";

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={classNames("App", dark||'white')}>
      <div className="main">
        <Header setDark={setDark} dark={dark} />
        <Routes>
          <Route index path="/" element={<Resume project={project} />} />
          <Route path="/project" element={<Project project={project} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <div className={classNames("footer", "section")}>
          Ecof<span>&copy;</span>
        </div>
      </div>
    </div>
  );
}

export default App;
