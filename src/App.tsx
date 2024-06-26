import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import NotFound from './NotFound';
import Cart from './Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
