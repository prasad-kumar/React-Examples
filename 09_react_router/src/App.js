import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";
import User from "./User";
import NotFound from "./NotFound";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const a = "Prasad%20Kumar";
  const b = a.replace("%20", " ");

  console.log(b);
  return (
    <div className="App">
      <NavBar />
      <hr />
      
      <span>
        {location.pathname === "/"
          ? "Home"
          : location.pathname.includes("%20")
          ? location.pathname.replace("%20", " ")
          : location.pathname }
      </span>
      <br />
      <button onClick={() => navigate(-1)}>Prev</button>
      <button onClick={() => navigate(1)}>Next</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About name="Prasad" />} />
        <Route path="/user/:name/:age" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
