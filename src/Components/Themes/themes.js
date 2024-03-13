import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { COLORS } from '../Colors/colors';

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.primaryBlack,
    background: COLORS.secundaryBlack,
    text: COLORS.primaryWhite,
    orange: COLORS.primaryOrange,
  }
}

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.secundaryWhite,
    background: COLORS.primaryWhite,
    text: COLORS.TextBlack,
    orange: COLORS.primaryOrange,
  }
}
