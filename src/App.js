import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/CreateMenu/Navbar';
import Home from './Components/CreateMenu/Home';
import About from './Components/CreateMenu/About';
import Contact from './Components/CreateMenu/Contact';
import Login from './Components/CreateMenu/Login';
import SingIn from './Components/CreateMenu/SingIn';
import Welcome from './Components/CreateMenu/Welcome';
// import FormControl from './Components/FormControl';
// import Header from './Components/Header';
// import List from './Components/List';

function App() {
  return (
    <div className="App">

      {/* *************** Q1 *************** */}
      {/* <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<FormControl />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </Router> */}

      {/* *************** Q2 *************** */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singup' element={<SingIn />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

