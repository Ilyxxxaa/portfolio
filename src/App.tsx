import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ToastContainer />
    </div>
  );
}

export default App;
