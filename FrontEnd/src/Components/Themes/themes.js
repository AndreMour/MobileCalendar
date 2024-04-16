import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { COLORS } from '../Colors/colors';

export const darkTheme = {
  colors: {
    ...DarkTheme.colors,
    primary: COLORS.primaryBlack,
    background: COLORS.secundaryBlack,
    text: 'white',
    orange: COLORS.primaryOrange,
    backgroundModalSort: COLORS.backgroundModal,
    backgroundWeek: COLORS.backgroundWeek,
    backgroundModalTask: COLORS.thirdBlack,
    backgroundTask: COLORS.blackTask,
    backgroundInput: COLORS.primaryWhite,
  }
}

export const lightTheme = {
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.secundaryWhite,
    background: COLORS.primaryWhite,
    text: 'black',
    orange: COLORS.primaryOrange,
    backgroundModalSort: COLORS.primaryWhite,
    backgroundWeek: COLORS.primaryWhite,
    backgroundModalTask: COLORS.secundaryWhite,
    backgroundTask: COLORS.primaryWhite,
    backgroundInput: COLORS.secundaryWhite,
  }
}
