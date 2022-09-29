import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//fotografia video, edicion, musico, prodcut
const App = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
