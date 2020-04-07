import React, { useState, useContext } from 'react';
import {View,Text, StyleSheet, Image,ScrollView} from 'react-native';
import { withTheme, TextInput, Button, RadioButton } from 'react-native-paper';
import DefaultNavbar from "../component/navbars/DefaultNavbar";
import AppContext from '../context/AppContext';

const ProfileScreen = ({theme}) => {
  const {colors}=theme;
  const [gender, setGender] = useState('Male');
  const { checked } = gender;
  useContext(AppContext)

  return (
    <View style={{backgroundColor:colors.backgroundsForApp,flex:1}}>
      
      <DefaultNavbar />
      <ScrollView>
      <Image source={require('../../assets/logo.png')} style={{height:80,width:80,alignSelf:"center",marginTop:50,marginBottom:20}} />
       <View style={styles.input}>
       <TextInput
        label='Full Name'
      />
        <TextInput
        label='Email'
      />
      <TextInput
        label='Phone with country code'
      />
      <TextInput
        label='Password'
      />
       <TextInput
        label='Area Code'
      />


            <RadioButton.Group
            onValueChange={checked => setGender({ checked })}
            value={checked}
            >
            <View style={{flexDirection:"row", marginTop:30}} >
            <Text style={styles.textt}>Male</Text>
            <RadioButton  title="Male"   checked={gender === 'Male'} value="Male"  onPress={() => setGender('Male') } />
            <Text style={styles.textt}>female</Text>
            <RadioButton title="Female"   checked={gender === 'Female'} value="Female" onPress={() => setGender('Female')} />
            </View> 
            </RadioButton.Group>


      <Text style={styles.textt}>Date of Birth</Text>



      <Button style={styles.btn} mode="outlined">Create Account</Button> 
      </View>
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  textt: {
    fontSize: 15,
    color:"#0e2b57",
   marginTop:15
    },
  input:{
   marginHorizontal:20,
   marginVertical:20,
  },
  btn:{
   marginVertical:20,
  }
});

export default withTheme(ProfileScreen);
