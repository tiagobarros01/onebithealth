interface DefaultThemeProps {
  title: string;

  colors: {
    background: string;
    textColor: string;
    inputColor: string;
    red: string;
    white: string;
  };
  
}

export const DefaultTheme: DefaultThemeProps = {
  title: 'light',

  colors: {
    background: '#e0e5e5',
    textColor: '#222',
    inputColor: '#f6f6f6',
  
    red: '#ff0043',
    white: '#fff',
  }

}