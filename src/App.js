import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Test } from './pages';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;