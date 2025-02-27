import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asinxron action yaratish
export const fetchArticleDetails = createAsyncThunk(
  'articleDetails/fetchArticleDetails',
  async (articleId,{ getState }) => {
    const state = getState();
    const language = state.language.currentLanguage;
    const response = await fetch(`https://journal-admin.usat.uz/api/articles/v1/${articleId}/detail/`,{
      headers: {
        'Accept-Language': language,
      },
    });
    if (!response.ok) {
      throw new Error('Server xatosi!');
    }
    return response.json();
  }
);

const initialState = {
  article: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    incrementViewCount: (state) => {
      if (state.article) {
        state.article.views_count += 1;
      }
    },
    incrementDownloadCount: (state) => {
      if (state.article) {
        state.article.downloads_count += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.article = action.payload;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementViewCount, incrementDownloadCount } = articleDetailsSlice.actions;

export default articleDetailsSlice.reducer;