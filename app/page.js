// COMPONENTS
import Navbar from './components/navbar';
import Footer from './components/footer';

// PAGES
import Main from './Pages/Main';

export default function Home() {
  return (
    <div>
      <Navbar />
         <Main />
      <Footer />
    </div>
      
  );
}
