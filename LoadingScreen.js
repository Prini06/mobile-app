import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#fc8019" />
      <Text style={styles.loadingText}>Your order has been placed!</Text>
      <Text style={styles.subText}>Please wait while we process your order.</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#fc8019',
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
    color: '#696969',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
