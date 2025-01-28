import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function Calculator({ navigation }) {
  const [inputs, setInputs] = useState({
    num1: '',
    num2: '',
  });
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    const { num1, num2 } = inputs;
    if (!num1 || !num2) {
      alert('Please enter both numbers');
      return;
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    setHistory([...history, `${num1} + ${num2} = ${sum}`]);
    setInputs({ num1: '', num2: '' });
  };

  const handleSubtract = () => {
    const { num1, num2 } = inputs;
    if (!num1 || !num2) {
      alert('Please enter both numbers');
      return;
    }
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
    setHistory([...history, `${num1} - ${num2} = ${difference}`]);
    setInputs({ num1: '', num2: '' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter first number"
        value={inputs.num1}
        onChangeText={(text) => setInputs({ ...inputs, num1: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Enter second number"
        value={inputs.num2}
        onChangeText={(text) => setInputs({ ...inputs, num2: text })}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Subtract" onPress={handleSubtract} />
      </View>

      {result !== null && <Text style={styles.resultText}>Result: {result}</Text>}

      <Button
        title="Go to History"
        onPress={() => navigation.navigate('History', { history })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 70,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  resultText: {
    fontSize: 20,
    color: 'blue',
    margin: 10,
  },
});