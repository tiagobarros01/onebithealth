import { StyleSheet } from 'react-native';
import { Theme } from '../../styles/themes/Theme.interface';

export const InputStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    Container: {
      width: '100%',

      marginBottom: 30,
    },
    Text: {
      paddingLeft: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.textColor,
    },
    Input: {
      backgroundColor: theme.colors.inputColor,
      height: 45,

      marginTop: 15,
      paddingLeft: 10,
      borderRadius: 15,
    },
  });
  return styles;
};
