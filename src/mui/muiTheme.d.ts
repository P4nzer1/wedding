import '@mui/material/styles';
import { AppTheme } from '../styles/muiTheme';

declare module '@mui/material/styles' {
    interface DefaultTheme extends AppTheme {}
    interface ThemeOptions extends Partial<AppTheme> {}
}