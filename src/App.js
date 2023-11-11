//Bootstrap 

//local components
import NavbarComponents from './Components/NavbarComponents';
import About from './Components/About';

//css files
import './App.css';
import Certifications from './Components/Certifications';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <About />
      <Certifications />
    </div>
  );
}

export default App;
