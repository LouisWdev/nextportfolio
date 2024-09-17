// COMPONENTS
import Navbar from './components/navbar';
import Footer from './components/footer';

// PAGES
import Main from './Pages/Main';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

export default function Home() {
  return (
    <div>
      <Navbar />
         <Main />
         <Portfolio />
         <Contact />
      <Footer />
    </div>
      
  );
}
