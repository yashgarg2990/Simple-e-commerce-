
import './App.css';
import Login from './components/Login';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart'


function App() {
  return (
    <div className=' h-full'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
  


export default App;
