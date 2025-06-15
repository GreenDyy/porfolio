import { Routes, Route } from 'react-router-dom';
import { Home, Test, Test2, TrySomethings } from '../pages';
import TestPromise from '../pages/Test/TestPromise';
import TestUseContext from '../pages/Test/TestUseContext';

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
            <Route path="/test-2" element={<Test2 />} />
            <Route path="/test-promise" element={<TestPromise />} />
            <Route path="/test-use-context" element={<TestUseContext />} />
        </Routes>
    );
} 