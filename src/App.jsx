import './index.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Program from './components/Program/Program';
import Membership from './components/Membership/Membership';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Program />
      <Membership />
    </div>
  )
}

export default App
