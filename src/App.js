import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.jsx';
import Landing from './Components/Landing.jsx';
import Highlights from './Components/Highlights.jsx';
import Featured from './Components/Featured.jsx';

function App() {

  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      
    </div>
  );
}

export default App;
