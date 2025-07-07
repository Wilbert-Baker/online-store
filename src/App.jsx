import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './pages/catalog';
import About from './pages/about.jsx';
import Quantitypicker from './components/Quantitypicker.jsx';


function App() {
  return (
    <>
      <Navbar /> 
      <Catalog/>
      <About/>
      <Footer/> 
      
    </>
  );
}
  
    
    
   export default App;