import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import "./i18n.jsx";
import App from './App.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import SendArticlePage from './pages/SendArticlePage/SendArticlePage.jsx'
import JournalPage from './pages/JournalPage/JournalPage.jsx'
import PlansPage from './pages/PlansPage/PlansPage.jsx'
import EditorialPage from './pages/EditorialPage/EditorialPage.jsx'
import ReviewersPage from './pages/ReviewersPage/ReviewersPage.jsx'
import GuidelinesPage from './pages/GuidelinesPage/GuidelinesPage.jsx'
import ChecklistPage from './pages/ChecklistPage/ChecklistPage.jsx'
import ArchivePage from './pages/ArchivePage/ArchivePage.jsx'
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
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
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/editorial" element={<EditorialPage />} />
        <Route path="/reviewers" element={<ReviewersPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </NextUIProvider>
  </StrictMode>,
)
