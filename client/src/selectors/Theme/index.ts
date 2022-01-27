import { RootState } from '../../types/redux';
import { themeTable } from '../../store/Theme';
import { createSelector } from '@reduxjs/toolkit';

export const getCurrentThemeName = (state: RootState) => state.theme.current;

export const getAllThemeOptions = (state: RootState) => state.theme.themes;

export const getCurrentTheme = createSelector(
    getCurrentThemeName,
    (theme) => themeTable[theme]
);
