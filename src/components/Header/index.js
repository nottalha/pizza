import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

const Header = ({children, title, leftbutton, rightbutton}) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar
        translucent={true}
        backgroundColor="yellow"
        barStyle="dark-content"
      />
      <Text style={styles.Title}>{title}</Text>

      <Text style={styles.sectionDescription}>{children}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'yellow',
    height: 50,
    marginBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
    // justifyContent:'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  Title: {
    // marginTop: StatusBar.currentHeight,
    fontSize: 24,
    fontWeight: 'bold',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Header;
