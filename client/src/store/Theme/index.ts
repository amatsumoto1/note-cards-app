import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseTheme } from '../../themes/base'

type ThemeState = {
  current: string,
  themes: string[]
}

export const themeTable: {[key:string]: any} = {
  [baseTheme.name]: baseTheme
}

const initialState: ThemeState = {
  current: baseTheme.name,
  themes: Object.keys(themeTable)
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setActive: (state: ThemeState, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
    reset: (state: ThemeState) => {
      state.current = initialState.current;
    }
  }
});

export const { setActive, reset } = themeSlice.actions;
export default themeSlice.reducer;