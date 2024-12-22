import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitArticle = createAsyncThunk(
  'articleSubmission/submitArticle',
  async (formData, { rejectWithValue }) => {
    try {
      // Create FormData object for file upload
      const submitData = new FormData();
      
      // Add the file
      if (formData.file) {
        submitData.append('file', formData.file);
      }

      // Add other form data as JSON
      const articleData = {
        direction_id: formData.direction_id,
        title: formData.title,
        keywords: formData.keywords,
        annotation: formData.annotation,
        authors_data: formData.authors_data
      };

      submitData.append('data', JSON.stringify(articleData));

      const response = await fetch('YOUR_API_ENDPOINT_HERE', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Maqolani yuborishda xatolik yuz berdi');
    }
  }
);

const initialState = {
  status: 'idle',
  error: null,
  submissionResult: null,
};

const articleSubmissionSlice = createSlice({
  name: 'articleSubmission',
  initialState,
  reducers: {
    resetSubmission: (state) => {
      state.status = 'idle';
      state.error = null;
      state.submissionResult = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitArticle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitArticle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.submissionResult = action.payload;
      })
      .addCase(submitArticle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { resetSubmission } = articleSubmissionSlice.actions;
export default articleSubmissionSlice.reducer;