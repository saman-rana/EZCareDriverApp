import React, {useContext, useState} from 'react';
import {Image, View,Text, Dimensions, Alert} from 'react-native';
import {Card, Title, Paragraph, withTheme, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import {AirbnbRating} from 'react-native-ratings';
import {withNavigation} from 'react-navigation';


const Orders = ({theme}) => {
    const {colors} = theme;
    return(

        <View>
            <Card
             style={{
                elevation: 10,
                margin: 20,
        
                width: Dimensions.get('window').width - 10,
              }}
            >
            <Card.Content style={{padding: 0}}>
            <Paragraph style={{color: colors.text, height: 90}}>
          {/* {item.description} */}description
        </Paragraph>
        <Paragraph style={{color: colors.text}}>
          <Icon name="bank" size={16} color={colors.text} />
          {/* {'   '} {item.shopname} ({item.shopphone}) */}name and phone
        </Paragraph>
        <Paragraph style={{color: colors.text}}>
          <Iconn name="van-utility" size={16} color={colors.text} />
          {/* {'   '} {item.drivername} ({item.driverphone}) */}name and phone
        </Paragraph>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, borderWidth: 1, alignItems: 'center'}}>
            <Title style={{fontSize: 14, color: colors.text}}>
              {/* {item.amount} */}amount
            </Title>
            <Paragraph style={{fontSize: 10}}>Amount</Paragraph>
          </View>
          <View style={{flex: 2, borderWidth: 1, alignItems: 'center'}}>
            <Title style={{fontSize: 14, color: colors.text}}>
              {/* {item.order_id} */}order id
            </Title>
            <Paragraph style={{fontSize: 10}}>PIN</Paragraph>
          </View>

          <View style={{flex: 1, borderWidth: 1, alignItems: 'center'}}>
            <Title style={{fontSize: 14, color: colors.text}}>
              {/* {item.status} */}status
            </Title>
            <Paragraph style={{fontSize: 10}}>Status</Paragraph>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
        <View style={{flex: 1, borderWidth: 1, alignItems: 'center'}}>
            <Icon name="bank" size={16} color={colors.text} />
            <AirbnbRating
              count={6}
              reviews={[
                'Terrible',
                'Bad',
                'OK',
                'Good',
                'Amazing',
                'Unbelievable',
              ]}
              defaultRating={0}
              size={20}
              style={{marginVertical: 10}}
              onFinishRating={val => {
                setShoprating(val);
              }}
            />
          </View>
          <View style={{flex: 1, borderWidth: 1, alignItems: 'center'}}>
            <Iconn name="van-utility" size={16} color={colors.text} />
            <AirbnbRating
              count={6}
              reviews={[
                'Terrible',
                'Bad',
                'OK',
                'Good',
                'Amazing',
                'Unbelievable',
              ]}
              defaultRating={0}
              size={20}
              style={{marginVertical: 10}}
              onFinishRating={val => {
                setDriverrating(val);
              }}
            />
          </View>
        </View>



        <Button
          mode="contained"
          onPress={() => {
            if (driverrating === 0) {
              Alert.alert('Please rate driver');
            } else if (shoprating === 0) {
              Alert.alert('Please rate shop');
            } else {
              markAsReceived();
            }
          }}
          >
          Mark As Received
        </Button>
             </Card.Content>
            </Card>       
         </View>
    );
}
export default withTheme(withNavigation(Orders));