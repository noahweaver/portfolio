import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

function App() {
    
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />}>
        <Route index element={<ComingSoon />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    )
}

export default App;
