import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="portfolio" element={<Portfolio />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
