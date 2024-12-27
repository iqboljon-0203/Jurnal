import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk yaratish
export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
  const response = await fetch('https://journal-admin.usat.uz/api/v1/authors/all/');
  if (!response.ok) {
    throw new Error('Foydalanuvchilarni olishda xatolik yuz berdi');
  }
  return response.json();
});

// Slice yaratish
const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    authors: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authorsSlice.reducer;

