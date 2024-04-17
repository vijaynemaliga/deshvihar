
import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/product';
import './App.css';

function App() {
  return (
    
        <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
    
   
  );
}

export default App;
