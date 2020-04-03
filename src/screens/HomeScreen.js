import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>my home Screen made b imran</Text>
      <Text style={styles.text}>my home Screen made b Saman</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
