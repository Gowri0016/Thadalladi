
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Component/Detail';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Tour from './Component/Tour';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Detail />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
