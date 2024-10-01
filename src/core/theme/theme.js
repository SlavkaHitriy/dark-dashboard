import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    accents: {
      gray: '#6E6E6E',
      peach: '#F7AC99',
      purple: '#BE9DF8',
      red: '#E82F34',
      turquoise: '#71DDDD',
      darkPeach: '#6B5851',
      lightRed: '#E4746D',
    },
    background: {
      tertiary: '#333333',
      primary: '#181818',
      secondary: '#242424',
    },
    main: '#0077DB',
    common: {
      black: '#0C0C0C',
    },
    text: {
      primary: '#F9F9F9',
      secondary: '#D9D9D9',
      tertiary: '#8A8A8A',
    },
  },
  typography: {
    allVariants: {
      fontSize: 14,
      color: '#F9F9F9',
      fontWeight: 400,
      lineHeight: '16px',
    },
    footnote: {
      fontSize: 12,
      color: '#D9D9D9',
      lineHeight: '14px',
    },
    bodyMedium: {
      fontSize: 14,
      fontWeight: 500,
    },
    h2: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '28px',
    },
    h3: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '24px',
    },
    h4: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'transparent',
          color: '#D9D9D9',
          fontWeight: 400,
          textTransform: 'none',
        },
        outlinedPrimary: {
          borderRadius: '4px',
          borderColor: '#8A8A8A',
          padding: '8px 16px',
          '&:hover': {
            background: '#F7AC99',
            color: '#333333',
            borderColor: '#F7AC99',
          },
        },
        contained: {
          borderRadius: '8px',
          padding: '8px 12px',
          height: 52,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '20px',
          width: '100%',
          boxShadow: 'none',
          color: '#F9F9F9',
          // '&:hover': {
          //   background: '#F7AC99',
          //   color: '#333333',
          // },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
        },
      },
    },
  },
  textareaAutosize: {},
})
