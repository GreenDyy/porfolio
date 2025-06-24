import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext'
import AppRoutes from './routes';
import { Home, Test } from './pages';
import TrySomethings from './pages/TrySomethings/TrySomethings';
import {ParallaxProvider} from 'react-scroll-parallax';

function App() {
  return (
    <AuthProvider>
      <ParallaxProvider>
        <BrowserRouter>
          <div className="App">
            <AppRoutes />
          </div>
        </BrowserRouter>
      </ParallaxProvider>
    </AuthProvider>
  );
}

export default App;