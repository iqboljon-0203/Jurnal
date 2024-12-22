import { configureStore } from '@reduxjs/toolkit';
import articleLatestReducer from '../features/articleLatest.js';
import journalIssuesReducer from '../features/jurnalIssueSlice.js';
import articlesReducer from '../features/articlesSlice.js';
import articleDetailsReducer from '../features/articleDetailsSlice.js';
export const store = configureStore({
  reducer: {
    articleLatest: articleLatestReducer,
    journalIssues: journalIssuesReducer,
    articles: articlesReducer,
    articleDetails: articleDetailsReducer,
  },
});