import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import BlogApp from './Pages/BlogApp.jsx';
import VotingApp from './Pages/VotingApp.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogApp />} />
        <Route path="/voting" element={<VotingApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
