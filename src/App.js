import "./App.css";
import Nav from "./Components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/books" element={Books} />
        </Routes>
        <Home />
      </div>
    </Router>
  );
}

export default App;
