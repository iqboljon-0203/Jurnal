import { configureStore } from '@reduxjs/toolkit';
import articleLatestReducer from '../features/articleLatest.js';
import journalIssuesReducer from '../features/jurnalIssueSlice.js';
import articlesReducer from '../features/articlesSlice.js';
import articleDetailsReducer from '../features/articleDetailsSlice.js';
import scienceFieldsReducer from '../features/scienceField.js';
import articleSubmissionReducer from '../features/articleSubmissionSlice.js';
import authorsReducer from '../features/authorsSlice.js';
import archiveJournalIssueReducer from '../features/archiveJournalIssueSlice.js';
import journalIssueDetailReducer from '../features/journalIssueDetailSlice.js';
export const store = configureStore({
  reducer: {
    articleLatest: articleLatestReducer,
    journalIssues: journalIssuesReducer,
    articles: articlesReducer,
    articleDetails: articleDetailsReducer,
    scienceFields: scienceFieldsReducer,
    articleSubmission: articleSubmissionReducer,
    authors: authorsReducer,
    archiveJournalIssue: archiveJournalIssueReducer,
    journalIssueDetail: journalIssueDetailReducer,
  },
});