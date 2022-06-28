import { useLocation, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Shop from '../pages/Shop/Shop';
import Brands from '../pages/Brands/Brands';
import Footer from './Footer/Footer';
import Cart from '../pages/Cart/Cart';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && location.pathname !== '/register' ? (
        <Header />
      ) : (
        ''
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {location.pathname === '/' ||
      location.pathname === '/contact' ||
      location.pathname === '/shop' ||
      location.pathname === '/brands' ||
      location.pathname === '/cart' ||
      location.pathname === '/login' ||
      location.pathname === '/register' ? (
        <Footer />
      ) : null}
    </div>
  );
};

export default Layout;
