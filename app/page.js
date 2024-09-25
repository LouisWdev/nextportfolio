// COMPONENTS
import Navbar from './components/navbar';
import Footer from './components/footer';

// PAGES
import Main from './Pages/Main';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
         <Main />
         <Portfolio />
         <About />
         <Contact />
      <Footer />
    </div>
      
  );
}
