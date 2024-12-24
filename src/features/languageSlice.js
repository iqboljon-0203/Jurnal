import { createSlice } from '@reduxjs/toolkit';
const lang=localStorage.getItem("i18nextLng");
const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: lang, // Boshlang'ich til sifatida o'zbek tili
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectCurrentLanguage = (state) => state.language.currentLanguage;

export default languageSlice.reducer;

