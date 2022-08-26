import Navbar from "./assets/components/Navbar";
import Home from '../src/assets/pages/Home';
import Blog from '../src/assets/pages/Blog';
import Projects from "./assets/pages/Projects";
import Contact from '../src/assets/pages/Contact';
import Footer from "./assets/components/Footer";
import '../src/assets/css/general.css'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';

function App() {
  return (
    <>
       <Router>
      <div className="App"> 
      <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/blog' exact element={<Blog/>} />
          <Route path="/projects" exact element={<Projects/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
      <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
