import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
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
      <main>
        <Home />
        <Program />
        <Membership />
        <About />
        <Trainers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;


// /* Navbar styling */
// .navbar {
//   background-color: #000;
//   color: #fff;
//   padding: 1rem 0;
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
// }

// .navbar-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
// }

// .navbar-logo {
//   display: flex;
//   align-items: center;
// }

// .navbar-logo img {
//   height: 40px;
//   margin-right: 1rem;
// }

// /* Hamburger menu icon for small screens */
// .hamburger {
//   display: block;
//   cursor: pointer;
//   font-size: 1.5rem;
// }

// /* Register Button */
// .register-button {
//   background-color: #00a8ff;
//   color: #fff;
//   border: none;
//   padding: 0.5rem 1rem;
//   font-weight: bold;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;
//   margin-left: 1rem;
// }

// /* Hover and Active Effects */
// .register-button:hover {
//   background-color: #007bbd;
// }

// .register-button:active {
//   transform: scale(0.95);
// }


// /* Hide hamburger menu on larger screens */
// @media (min-width: 768px) {
//   .hamburger {
//     display: none;
//   }
// }

// /* Navbar menu */
// .navbar-menu {
//   display: none;
//   flex-direction: column;
//   list-style-type: none;
//   background-color: #000;
//   position: fixed;
//   top: 0;
//   left: -100%;
//   height: 100%;
//   width: 250px;
//   padding: 2rem 1rem;
//   transition: left 0.3s ease;
//   z-index: 999; /* Make sure it's above other content */
// }

// /* Display the menu items as a column */
// .navbar-menu li {
//   margin: 1rem 0;
// }

// /* Active class for sidebar */
// .navbar-menu.active {
//   left: 0;
//   display: flex;
// }

// /* Navbar menu styling for larger screens */
// @media (min-width: 768px) {
//   .navbar-menu {
//     display: flex;
//     flex-direction: row;
//     position: static;
//     background-color: transparent;
//     width: auto;
//     height: auto;
//     left: 0;
//     padding: 0;
//   }

//   .navbar-menu li {
//     margin: 0 1rem;
//   }
// }

// .navbar-menu a {
//   color: #fff;
//   text-decoration: none;
//   font-weight: bold;
//   transition: color 0.3s ease;
// }

// .navbar-menu a:hover {
//   color: #00a8ff;
// }

// @media (min-width: 768px) {
//   .navbar-container {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }

//   .register-button {
//     margin-left: auto; /* Push it to the far right */
//   }
// }
