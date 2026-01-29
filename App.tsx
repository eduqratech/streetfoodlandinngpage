
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./Home'));
import Placeholder from './Placeholder';
import { Flame } from 'lucide-react';

// Loading component matching the app's style
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#121212] flex items-center justify-center z-[100]">
    <div className="text-center">
      <div className="mb-8 flex justify-center animate-pulse">
        <Flame size={48} className="text-[#C5A059]" />
      </div>
      <h1 className="text-2xl serif tracking-[0.5em] text-[#C5A059] uppercase">Zynrova</h1>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<Placeholder />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
