import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Swap from './Swap';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
