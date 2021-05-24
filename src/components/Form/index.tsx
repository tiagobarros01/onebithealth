import React, { useContext, useMemo } from 'react';
import {
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IMCContext } from '../../contexts/IMCContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { HomeStyles } from '../../styles/screens/Home';
import { InputTextInfo } from '../InputTextInfo';
import { FormStyles } from './style';

export function Form() {
  const { handleIMC, handleIMCAgain, TexBtn, btnState } =
    useContext(IMCContext);

  const { theme } = useContext(ThemeContext);

  const Styles = useMemo(() => FormStyles(theme), [theme]);
  const StylesHome = useMemo(() => HomeStyles(theme), [theme]);


  return (
    <Pressable onPress={Keyboard.dismiss}>
      <InputTextInfo />
      <View style={Styles.BtnContainer}>
        <TouchableOpacity
          onPress={
            btnState === true ? () => handleIMC() : () => handleIMCAgain()
          }
          style={StylesHome.Button}
          activeOpacity={0.6}
        >
          <Text style={StylesHome.TextBtn}>{TexBtn}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.WarningContainer}>
        <Text style={Styles.WarningText}>
          Fill the height and weight fields
        </Text>
      </View>
    </Pressable>
  );
}
