// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { login } from './api';
import Ionicons from '@expo/vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      alert(response.data.status_message);
      // Stocker le token pour l'utiliser dans d'autres requêtes
      navigation.navigate('Register');
      const token = response.data.token;
      // Rediriger vers une autre page ou mettre à jour l'état de l'application
    } catch (error) {
      alert('Erreur lors de la connexion');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.iconcss} name="mail" size={25} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.passwordContainer}>
        <TouchableOpacity onPress={toggleShowPassword} style={styles.iconButton}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={25} color="#007BFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
      </View>
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('RecoverPassword')} style={styles.textRight}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <Text style={styles.textCenter}>Vous n'avez pas encore de compte</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconButton: {
    padding: 8,
  },
  registerLink: {
    textAlign: 'center',
    color: '#007BFF',
  },
  textCenter: {
    textAlign: 'center',
    color: '#000',
    margin: 10,
  },
  textRight: {
    textAlign: 'right',
    color: '#007BFF',
    margin: 10,
  },
  iconcss: {
    marginRight: 8,
  },
});

export default LoginScreen;

