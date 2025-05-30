import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import Posts from './components/posts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
