import './index.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Program from './components/Program/Program';
import Membership from './components/Membership/Membership';
import Trainers from './components/Trainers/Trainers';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Program />
      <Membership />
      < About />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
