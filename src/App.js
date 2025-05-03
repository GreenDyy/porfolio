import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Test } from './pages';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} >
              <Route path="test" element={<Test />} />
            </Route>
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;