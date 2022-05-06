import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './pages/NotFound';

function App() {
    
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Layout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    )
}

export default App;
