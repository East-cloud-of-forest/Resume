import './App.scss';
import Experience from './components/Experience';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Header />
        <Profile />
        <Skill />
        <Experience />
      </div>
    </div>
  );
}

export default App;
