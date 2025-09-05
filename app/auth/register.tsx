import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Inscription</Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nom complet"
            value={name}
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Âge"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <a href="/dashboard" style={styles.registerButton}>
            <Text style={styles.registerButtonText}>CRÉER LE COMPTE</Text>
          </a>
          
          <a href="/" style={styles.backLink}>
            <Text style={styles.backText}>← Retour à l'accueil</Text>
          </a>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F2ED',
  },
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5D2E0A',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    gap: 20,
  },
  input: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4C4B0',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#5D2E0A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    textDecoration: 'none',
  },
  registerButtonText: {
    color: '#F5F2ED',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backLink: {
    marginTop: 20,
  },
  backText: {
    color: '#8B4513',
    textAlign: 'center',
    fontSize: 16,
  },
});
