import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';

import List from '../../components/list';
import Header from '../../components/Header';
import {cards} from '../../components/data';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const TopImage = ({children, source}) => {
  return <View style={styles.ImageStyle}>{children}</View>;
};
const Activity = () => {

  const backgroundStyle = {
    flex: 1,    
    backgroundColor : "#373737",
    borderRadius: 0,
  };

  return (
    <ScrollView style={backgroundStyle}>
     <View
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header title= "Menu" />
        <View>
          
      <TopImage>
        <Image
          style={styles.ImageStyle2}
          source={require('../../assets/wolf.jpg')}
        />
      </TopImage>


        <List title="Deals" cards={cards}/>
        <List title="Deals" cards={cards}/>
        <List title="Deals" cards={cards}/>
        <List title="Deals" cards={cards}/>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  ImageStyle:{
    width: width*0.9,
    height: width*0.2,
    backgroundColor: '#373737',
    alignSelf: 'center',
    paddingBottom: 100,
  },
  
  ImageStyle2:{
    width: width*0.9,
    height: width*0.2,
    borderRadius: 10,
  },
  highlight: {
    fontWeight: '700',
  },
  modalContainer:{
    width: width*0.9,
    height:  height*0.8,
    backgroundColor: 'grey',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Activity;
