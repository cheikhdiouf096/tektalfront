// RecoverPasswordScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button,TouchableOpacity, Text, StyleSheet } from 'react-native';
import { recoverPassword } from './api';


import Ionicons from '@expo/vector-icons/Ionicons';


const RecoverPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = async () => {
    try {
      const response = await recoverPassword({ email });
      alert(response.data.status_message);
    } catch (error) {
      alert('Erreur lors de la récupération du mot de passe');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textCenter} >Entrez votre adresse e-mail ci-dessous et nous vous enverrons des 
        instructions sur la façon de modifier votre mot de passe.</Text>
        
      <Ionicons style={styles.iconcss} name="mail" size={32} color="#007BFF" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Récupérer le mot de passe" onPress={handleRecoverPassword} />

      <Text style={styles.textCenter} > Revenir à la page de</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}> Connexion</Text>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  loginLink: {
    textAlign: 'center',
    color: '#007BFF',
  },

  textCenter: {
    textAlign: 'center',
    color: '#000',
    margin: '10px',
  },

  iconcss: {
    position: 'relative',
    left: '90%',
    top: '40px'
  },
});

export default RecoverPasswordScreen;
