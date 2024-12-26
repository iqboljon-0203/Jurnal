import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk yaratish
export const fetchJournalIssueDetail = createAsyncThunk(
  'journalIssueDetail/fetchJournalIssueDetail',
  async (issueId,{ getState }) => {
    const state = getState();
    const language = state.language.currentLanguage;
    const response = await fetch(`https://journal.usat-test.uz/api/v1/journals/issue/${issueId}/detail/`,{
      headers: {
        'Accept-Language': language,
      },
    });
    if (!response.ok) {
      throw new Error('Jurnal soni ma\'lumotlarini olishda xatolik yuz berdi');
    }
    return response.json();
  }
);

// Slice yaratish
const journalIssueDetailSlice = createSlice({
  name: 'journalIssueDetail',
  initialState: {
    issueDetail: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournalIssueDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJournalIssueDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.issueDetail = action.payload;
      })
      .addCase(fetchJournalIssueDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default journalIssueDetailSlice.reducer;

