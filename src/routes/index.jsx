import { Routes, Route } from 'react-router-dom';
import { Home, Test, TrySomethings } from '../pages';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} >
                <Route path="test-3d" element={<Test />} />
            </Route>
            <Route path="/test-area" element={<TrySomethings />}>
                <Route path="test-3d" element={<Test />} />
            </Route>
            <Route path="/test-3d" element={<Test />} />
        </Routes>
    );
} 