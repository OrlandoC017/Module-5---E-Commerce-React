import "./App.css";
import Nav from "./Components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Books from "./Pages/Books.jsx";
import { books } from "./data.js"
import BookInfo from "./Pages/BookInfo.jsx"

function App() {
  return (
    
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books"  element={<Books />} />
          <Route path="/books/1" element={<BookInfo books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
