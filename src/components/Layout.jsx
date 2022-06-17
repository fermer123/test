import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Contact from '../pages/Contact/Contact';
import Shop from '../pages/Shop/Shop';
import Footer from './Footer/Footer';
const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
