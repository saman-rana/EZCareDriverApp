import React, { useContext, useState } from 'react';
import {View,Text, StyleSheet,FlatList, ScrollView} from 'react-native';
import DashboardNavbar from '../component/navbars/DashboardNavbar';
import { Title,TextInput,withTheme} from 'react-native-paper';
import Orders from '../component/orders/Orders';
import CompletedOrdersCards from '../component/orders/CompletedOrdersCards';
import CancelOrderCard from '../component/orders/CancelOrderCard';
import AppContext from '../context/AppContext';
const OrderScreen = ({theme,Paragraph,title}) => {
  const {colors} = theme;
  useContext(AppContext)

     const [testarray,setTestArray] = useState([{ text: 'Camera' }, { text: 'Live' }]);
    
  return (
    <View style={{flex:1, backgroundColor:"#e7e7e7"}}>
      <DashboardNavbar title="Orders"/>

      <ScrollView>

               <Title>On Going Orders</Title>
                <FlatList
                    horizontal={true}
                    keyExtractor={(singleItem)=>{singleItem.text}}
                    showsHorizontalScrollIndicator={false}
                    data={testarray}
                    renderItem={({item})=>{
                      return(  
                      <Orders />
                    );
                }}
                />
              
              <Title>Completed Orders</Title>
                <FlatList
                      horizontal={true}
                      keyExtractor={(singleItemm)=>{singleItemm.text}}
                      showsHorizontalScrollIndicator={false}
                      data={testarray}
                      renderItem={({iteem})=>{
                        return(
                          <CompletedOrdersCards/>
                        );
                }}
                />

                <Title>Canceled Orders</Title>
                <FlatList
                      horizontal={true}
                      keyExtractor={(singleItemOrder)=>{singleItemOrder.text}}
                      showsHorizontalScrollIndicator={false}
                      data={testarray}
                      renderItem={({itemm})=>{
                        return(
                          <CancelOrderCard/>
                        );
                        }}
                />

                </ScrollView>
                </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default withTheme(OrderScreen);