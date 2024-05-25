import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}
