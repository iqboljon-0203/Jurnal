import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n.js";
import App from './App.jsx'
import ArticlePage from './pages/ArticlePage/ArticlePage.jsx'
import ArticleDetilPage from './pages/ArticleDetailPage/ArticleDetailPage.jsx'
import AuthorsPage from './pages/AuthorsPage/AuthorsPage.jsx'
import SearchArticlePage from './pages/SearchArticlePage/SearchArticlePage.jsx'
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
import { Provider } from 'react-redux';
import { store } from "./app/store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <NextUIProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:slug" element={<ArticleDetilPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/search" element={<SearchArticlePage />} />
        <Route path="/send_article" element={<SendArticlePage />} />
        <Route path="/archieve/:id" element={<JournalPage />} />
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
    </Provider>
  </StrictMode>,
)
