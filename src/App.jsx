<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
>>>>>>> 8a845b2873e880e40052aa1532b0daced7a62686
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
      <Header />
      <Routes>
        <Route path="*" element={
          <>
            <Imagesbackground style={{ left: '230px', paddingTop:'0px' }} />
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


