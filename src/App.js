//Bootstrap 

//local components
import NavbarComponents from './Components/NavbarComponents';
import About from './Components/About';
import Skills from './Components/Skills';

//css files
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <About />
      <Skills />
    </div>
  );
}

export default App;
