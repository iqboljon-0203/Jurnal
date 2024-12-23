import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk yaratish
export const fetchArchiveJournalIssues = createAsyncThunk(
  'archiveJournalIssue/fetchArchiveJournalIssues',
  async () => {
    const response = await fetch('https://journal.usat-test.uz/api/v1/journals/all-issues/');
    if (!response.ok) {
      throw new Error('Arxiv jurnal sonlari ma\'lumotlarini olishda xatolik yuz berdi');
    }
    return response.json();
  }
);

// Slice yaratish
const archiveJournalIssueSlice = createSlice({
  name: 'archiveJournalIssue',
  initialState: {
    issues: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArchiveJournalIssues.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArchiveJournalIssues.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issues = action.payload;
      })
      .addCase(fetchArchiveJournalIssues.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default archiveJournalIssueSlice.reducer;
