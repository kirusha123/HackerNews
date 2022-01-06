import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hackNews" element={<NewsPage />} />
        <Route path="*" element={<Navigate to="/hackNews" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
