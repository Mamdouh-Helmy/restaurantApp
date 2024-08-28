import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Imagesbackground from './components/Imagesbackground';
import Section from './components/Section';
import Venue from './components/Venue';
import Events from './components/Events';
import Menu from './components/Menu';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <Imagesbackground style={{ left: '120px', paddingTop:'0px' }} />
      <Header />
      <Routes>
        <Route path="*" element={
          <>
            <Section />
            <Imagesbackground style={{ right: '10px', paddingTop:'150px' }} />
            <Venue />
            <Events />
            <Menu />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
