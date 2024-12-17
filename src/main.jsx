import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import SendArticlePage from './pages/SendArticlePage/SendArticlePage.jsx'
import JournalPage from './pages/JournalPage/JournalPage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/send_article" element={<SendArticlePage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Router>
    </NextUIProvider>
  </StrictMode>,
)
