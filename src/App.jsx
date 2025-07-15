{/* import './App.css'; */}
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/catalog';
import About from './pages/About';
import Home from './pages/Home';
import Cart from './pages/Cart';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GlobalProvider from './state/GlobalProvider';
import Payment from './pages/Payment';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
                
        <Routes>
          <Route path='/' element={<Home />}></Route> 
          <Route path='/catalog' element={<Catalog />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/payment'element={<Payment />}></Route>
        </Routes>
         
        <Footer/>     
      </BrowserRouter>
    </GlobalProvider>
  );
}
  
    
    
   export default App;