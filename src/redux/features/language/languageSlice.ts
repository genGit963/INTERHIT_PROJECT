import {createSlice} from '@reduxjs/toolkit';

type LanguageType = {
  language: 'english' | 'nepali';
};

const initialState: LanguageType = {
  language: 'english',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const {setLanguage} = languageSlice.actions;
