import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  fields: [],
  status: 'idle',
  error: null,
};

export const fetchScienceFields = createAsyncThunk(
  'scienceFields/fetchScienceFields',
  async (language, { rejectWithValue }) => {
    try {
      const response = await fetch('https://journal.usat-test.uz/api/v1/directions/all/', {
        headers: {
          'Accept-Language': language,
        },
      });
      
      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error,'Failed to fetch science fields');
    }
  }
);

const scienceFieldsSlice = createSlice({
  name: 'scienceFields',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchScienceFields.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchScienceFields.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fields = action.payload;
      })
      .addCase(fetchScienceFields.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default scienceFieldsSlice.reducer;