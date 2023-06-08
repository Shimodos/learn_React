import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoteFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <main className="container contant">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'*'} element={<NoteFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
