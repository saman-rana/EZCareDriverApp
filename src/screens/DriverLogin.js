import React, { useContext } from 'react';
import {View,Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { withTheme, TextInput, Button } from 'react-native-paper';
import DefaultNavbar from "../component/navbars/DefaultNavbar";
import AppContext from '../context/AppContext';

const DriverLogin = ({theme}) => {
  const {colors}=theme;
 useContext(AppContext)
  return (
    <View style={{backgroundColor:colors.backgroundsForApp,flex:1}}>
      <DefaultNavbar />
      <Image source={require('../../assets/logo.png')} style={{height:150,width:150,alignSelf:"center",marginTop:50,marginBottom:20}} />
      
       <View style={styles.input}>
        <TextInput
        label='Email'
      />
      <TextInput
        label='Password'
      /> 
      <Button style={styles.btn} onPress={()=>{console.log("Clicked.")}} mode="outlined">LOGIN</Button> 
      </View>

    </View>
  );
};



const styles = StyleSheet.create({
  textt: {
    fontSize: 14,
    marginVertical:20,
    marginHorizontal:90,
    // color:"#0e2b57",
    fontWeight:"bold"
    },
  input:{
   marginHorizontal:20,
   marginVertical:20,
  },
  btn:{
   marginVertical:20,
  }
});

export default withTheme(DriverLogin);
