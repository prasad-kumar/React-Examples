
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';
import About from './About';
import User from './User';
import NotFound from './NotFound';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={ <About name='Prasad' />} />
        <Route path='/user/:name/:age' element={ <User />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
