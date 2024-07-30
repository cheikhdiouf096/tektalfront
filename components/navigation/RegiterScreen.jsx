// RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { register } from './api';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const googleIcon = <FontAwesome name="google" size={32} color="white" onPress={() => {}} />;
const appleIcon = <FontAwesome name="apple" size={32} color="black" onPress={() => {}} />;
const facebookIcon = <FontAwesome name="facebook" size={32} color="white" onPress={() => {}} />;

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirmation = () => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleRegister = async () => {
    try {
      const response = await register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      alert(response.data.status_message);
      navigation.navigate('Login');
    } catch (error) {
      alert('Erreur lors de l\'inscription');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.iconcss} name="person" size={25} color="#007BFF" />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          value={name}
          onChangeText={setName}
        />
      </View>
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
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={25} color="#007BFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TouchableOpacity onPress={toggleShowPasswordConfirmation} style={styles.iconButton}>
          <FontAwesome name={showPasswordConfirmation ? "eye-slash" : "eye"} size={25} color="#007BFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Confirmer le mot de passe"
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          secureTextEntry={!showPasswordConfirmation}
        />
      </View>
      <Button title="S'inscrire" onPress={handleRegister} />
      <Text style={styles.textCenter}>Vous avez déjà un compte ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Connecter</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <Text style={styles.socialLoginText}>S'inscrire avec</Text>
      <View style={styles.socialLoginButtons}>
        <Button title={googleIcon} onPress={() => {}} color="#DB4437" />
        <Button title={facebookIcon} onPress={() => {}} color="#4267B2" />
      </View>
      <View style={styles.socialLoginButtons}>
        <Button title={appleIcon} onPress={() => {}} color="#fff" />
      </View>
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
  input: {
    flex: 1,
    paddingVertical: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  iconButton: {
    padding: 8,
  },
  loginLink: {
    textAlign: 'center',
    color: '#007BFF',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  socialLoginText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  socialLoginButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
    color: '#000',
    margin: 10,
  },
  iconcss: {
    marginRight: 8,
  },
});

export default RegisterScreen;




