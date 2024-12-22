import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asinxron action yaratish
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await fetch('https://journal.usat-test.uz/api/v1/articles/all/');
    if (!response.ok) {
      throw new Error('Server xatosi!');
    }
    return response.json();
  }
);

const initialState = {
  articles: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    incrementViewCount: (state, action) => {
      const article = state.articles.find(article => article.id === action.payload);
      if (article) {
        article.views_count += 1;
      }
    },
    incrementDownloadCount: (state, action) => {
      const article = state.articles.find(article => article.id === action.payload);
      if (article) {
        article.downloads_count += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementViewCount, incrementDownloadCount } = articlesSlice.actions;

export default articlesSlice.reducer;