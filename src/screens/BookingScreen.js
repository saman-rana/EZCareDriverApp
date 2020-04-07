import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import DashboardNavbar from '../component/navbars/DashboardNavbar';
const BookingScreen = () => {

  return (
    <View>
      <DashboardNavbar title="Booking"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default BookingScreen;