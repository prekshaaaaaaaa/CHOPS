
import './App.css';
import Bar from './components/bar';
import Header from './components/Header';
import SignatureMenu from './pages/SignatureMenu';
import OurStory from './pages/OurStory';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import Menu from './pages/Menu';
import About from './pages/About';
import Review from './pages/Review';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve';
import Order from './pages/Order';
import PlaceOrder from './pages/PlaceOrder';
import Dish from './pages/dishes';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function MainContent() {
  return (
    <>
      <Bar/>
      <Header/>
      <Dish/>
      <SignatureMenu/>
      <OurStory/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<><Bar/><Menu/><Footer/></>} />
        <Route path="/about" element={<><Bar/><About/><Footer/></>} />
        <Route path="/review" element={<><Bar/><Review/><Footer/></>} />
        <Route path="/contact" element={<><Bar/><Contact/><Footer/></>} />
        <Route path="/reserve" element={<><Bar/><Reserve/><Footer/></>} />
        <Route path="/order" element={<><Bar/><Order/><Footer/></>} />
        <Route path="/placeorder" element={<><Bar/><PlaceOrder/><Footer/></>} />
        <Route path="/*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
