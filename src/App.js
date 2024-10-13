import './App.css';
import Header from './components/Header';
import Sections from './components/Sections';

function App() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <div className="flex flex-col md:flex-row md:h-screen h-auto">
      {/* Header Section (Responsive) */}
      <Header scrollToSection={scrollToSection} />

      {/* Content Section (Responsive) */}
      <Sections />
    </div>
  );
}

export default App;
