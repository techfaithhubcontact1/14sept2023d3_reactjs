//1. Import Area

// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Aside from './components/Aside';
import Section from './components/Section';
import Footer from './components/Footer';

 
//Function defination Area
function App() {
  return (
    <>
      <Header />

      <main>
        <Aside />
        <Section />
      </main>

      <Footer />
    </>
  );
}

// Export Area 
export default App;
