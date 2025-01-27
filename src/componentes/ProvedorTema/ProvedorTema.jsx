import { ThemeProvider } from "@emotion/react";

const tema = {
    cores: {
        branco: '#FFFFF',
        atencao: '',
        focus: '',
        primarias: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        
    },
    espacamentos: {
        xs: '8px',
        s: '16px',
        l: '32px',
    },
    fontFamily: "'Montserrat', sans-serif"
};

export const ProvedorTema = ({ children }) => {
  return (
      <ThemeProvider theme={tema}>
          {children}
      </ThemeProvider>
  );
};
