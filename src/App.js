import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Swap from './Swap';
import Home from './Home';
import Trade from './Trade';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
          <Route path="/trade" element={<Trade />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
