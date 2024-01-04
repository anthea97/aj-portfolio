import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/aj-portfolio" element={<Home />} />
        <Route path="/aj-portfolio/projects" element={<Projects />} />
        <Route path="/aj-portfolio/experience" element={<Experience />} />
        <Route path="/aj-portfolio/contact" element={<Contact />} />
      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
