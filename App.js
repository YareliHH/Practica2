import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    console.log('Olvidaste tu contraseña?');
  };

  const handleGetSupport = () => {
    console.log('Obtener Soporte');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Iniciar Sesión</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>¿Contraseña olvidada?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGetSupport}>
            <Text style={styles.getSupport}>Obtener Soporte</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  titleContainer: {
    position: 'absolute',
    top: 50, 
  },
  title: {
    fontSize: 24,
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 10,
    paddingLeft: 15,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 18,
    marginTop: 23,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  forgotPassword: {
    textDecorationLine: '',
    marginRight: 20,
    color: 'grey',
  },
  getSupport: {
    color: 'grey',
    textDecorationLine: '',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
