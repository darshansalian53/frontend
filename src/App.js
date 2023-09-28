
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Logout from './components/Logout';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Services from './components/Services';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/service' Component={Services} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path='/login' Component={Login} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/dashboard' Component={Dashboard} />
        <Route exact path='/logout' Component={Logout} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
