import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitArticle = createAsyncThunk(
  'articleSubmission/submitArticle',
  async (data, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      // Append all string and number fields
      formData.append('direction_id', data.direction_id.toString());
      formData.append('title', data.title);
      formData.append('keywords', data.keywords);
      formData.append('annotation', data.annotation);
      formData.append('references', data.references);
      formData.append('anti_plagiarism_certificate', data.anti_plagiarism_certificate);  


      // Append the file
      formData.append('original_file', data.original_file);

      // Convert authors_data to JSON and append
      formData.append('authors_data', JSON.stringify(data.authors_data));

      const response = await fetch('https://journal-admin.usat.uz/api/v1/articles/submit/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  result: null,
};

const articleSubmissionSlice = createSlice({
  name: 'articleSubmission',
  initialState,
  reducers: {
    resetSubmission: (state) => {
      state.status = 'idle';
      state.error = null;
      state.result = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitArticle.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitArticle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload;
        state.error = null;
      })
      .addCase(submitArticle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetSubmission } = articleSubmissionSlice.actions;

export default articleSubmissionSlice.reducer;

