import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [modifier, setModifier] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1)
    console.log(quantity);

  };

  const decQuantity = () => {
    setQuantity(quantity - 1)
    console.log(quantity);

  };

  const addModifier = () => {
    setModifier(modifier + 1)
    console.log(modifier);

  };

  const decModifier = () => {
    setModifier(modifier - 1)
    console.log(modifier);

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.horizontalView}>
        <TouchableOpacity style={styles.btnCircle} onPress={decQuantity}>
          <Text style={styles.textBtnCircle}>-</Text>
        </TouchableOpacity>

        <TextInput placeholder='Quantidade' keyboardType='number-pad' style={styles.input}>{quantity}</TextInput>

        <TouchableOpacity style={styles.btnCircle} onPress={addQuantity}>
          <Text style={styles.textBtnCircle}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        // backgroundColor: '#fafafa',
        alignItems: 'center',
        marginBottom: 12,
        paddingVertical: 8,

      }}>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          placeholder={{
            label: 'Selecione um dado...',
            value: null,
            color: '#9EA0A4',
          }}
          items={[
            { label: 'D4', value: '4' },
            { label: 'D6', value: '6' },
            { label: 'D8', value: '8' },
            { label: 'D10', value: '10' },
            { label: 'D12', value: '12' },
            { label: 'D20', value: '20' },
            { label: 'D100', value: '100' },
          ]}
          style={pickerStyle}
          useNativeAndroidPickerStyle={false}
        />
      </View>

      <View style={styles.horizontalView}>
        <TouchableOpacity style={styles.btnCircle} onPress={decModifier}>
          <Text style={styles.textBtnCircle}>-</Text>
        </TouchableOpacity>
        <TextInput placeholder='Modificador' keyboardType='numeric' style={styles.input}>{modifier}</TextInput>
        <TouchableOpacity style={styles.btnCircle} onPress={addModifier}>
          <Text style={styles.textBtnCircle}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.textBtnAction}>Rolar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAction}>
          <Text style={styles.textBtnAction}>Zerar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultView}>
        <TextInput placeholder='Resultado' multiline={true} scrollEnabled={true} style={styles.inputResult} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image source={require('./assets/d6.png')} style={{ height: 150, width: 150 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  btnAction: {
    backgroundColor: 'lightgray',
    width: 110,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  textBtnAction: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnCircle: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 35,
    height: 35,
  },
  textBtnCircle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  input: {
    height: 50,
    width: '50%',
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  resultView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center'
  },
  inputResult: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    color: 'black',
    paddingTop: 10,
    height: 50,
    width: 180,
    marginHorizontal: 96,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputAndroid: {
    color: 'black',
    height: 50,
    width: 205,
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  // placeholderColor: 'white',
  // underline: { borderTopWidth: 0 },
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: '#00000099',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
});