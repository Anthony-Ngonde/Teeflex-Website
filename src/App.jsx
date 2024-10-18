import './index.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Program from './components/Program/Program';
import Membership from './components/Membership/Membership';
import Trainers from './components/Trainers/Trainers';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Program />
      <Membership />
      <Trainers />
    </div>
  )
}

export default App
