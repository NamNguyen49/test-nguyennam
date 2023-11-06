import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/component/Header';
import Content from './src/component/Content';
import Story from './src/component/Story';
import Footer from './src/component/Footer';
function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Story />
      <View style={styles.hr} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hr: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#646464',
  },
});

export default App;
