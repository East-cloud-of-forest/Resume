import './App.scss';
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
      </div>
    </div>
  );
}

export default App;
