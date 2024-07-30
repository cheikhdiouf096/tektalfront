// ProfileScreen.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { logout } from './api';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await logout(token); // Assurez-vous d'avoir le token stocké
      alert('Déconnexion réussie');
      navigation.navigate('Login');
    } catch (error) {
      alert('Erreur lors de la déconnexion');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Se déconnecter" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default ProfileScreen;
