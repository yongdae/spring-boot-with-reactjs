import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App title="Home" />} />
      <Route path="/route/" element={<App title="Route" />} />
      <Route path="/route/sample" element={<App title="Route Sample" />} />
      <Route path="/route/sub/1" element={<App title="Route Sub1" />} />
      <Route path="/route/sub/1/2" element={<App title="Route Sub2" />} />
    </Routes>
  );
}
