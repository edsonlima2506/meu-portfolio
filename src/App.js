import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import AcademicEducation from './components/academicEducation';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <AcademicEducation />
    </div>
  );
}

export default App;
