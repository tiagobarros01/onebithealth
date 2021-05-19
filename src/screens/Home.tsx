import React from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { InputTextInfo } from '../components/InputTextInfo';
import { HomeStyles } from '../styles/Home';

export default function Home() {
  return (
    <SafeAreaView style={HomeStyles.Area}>
      <View style={HomeStyles.Title}>
        <Text style={HomeStyles.Text}>ONEBITHEALTH</Text>
      </View>
      <View style={HomeStyles.Main}>
        <InputTextInfo PlaceholderValue="Ex. 1.75" TextValue="Height" />
        <InputTextInfo PlaceholderValue="Ex. 70.55" TextValue="Weight" />
      </View>
    </SafeAreaView>
  );
}
