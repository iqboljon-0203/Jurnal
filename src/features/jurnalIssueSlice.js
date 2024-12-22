import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asinxron action yaratish
export const fetchJournalIssues = createAsyncThunk(
  'journalIssues/fetchJournalIssues',
  async () => {
    const response = await fetch('https://journal.usat-test.uz/api/v1/journals/latest-issues/',{
      headers: {
        'Accept-Language': 'uz',
      },
    });
    if (!response.ok) {
      throw new Error('Server error!');
    }
    return response.json();
  }
);

const initialState = {
  issues: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const journalIssuesSlice = createSlice({
  name: 'journalIssues',
  initialState,
  reducers: {
    addIssue: (state, action) => {
      state.issues.push(action.payload);
    },
    updateIssue: (state, action) => {
      const index = state.issues.findIndex(issue => issue.id === action.payload.id);
      if (index !== -1) {
        state.issues[index] = action.payload;
      }
    },
    deleteIssue: (state, action) => {
      state.issues = state.issues.filter(issue => issue.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournalIssues.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJournalIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload;
      })
      .addCase(fetchJournalIssues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addIssue, updateIssue, deleteIssue } = journalIssuesSlice.actions;

export default journalIssuesSlice.reducer;