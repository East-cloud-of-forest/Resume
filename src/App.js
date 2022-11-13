import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Resume from "./Pages/Resume";
import project from "./data/project";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Resume project={project} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
