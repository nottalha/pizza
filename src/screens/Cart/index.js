import React, {useContext} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import Header from '../../components/Header';

import {AuthContext} from '../../components/context';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TopImage = ({children, source}) => {
  return <View style={styles.ImageStyle}>{children}</View>;
};
const Cart = () => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView>
      <Header title="Check Out" />

      <TopImage>
        <Image
          style={styles.ImageStyle2}
          source={require('../../assets/wolf.jpg')}
        />
      </TopImage>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            signOut()
          }}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  ImageStyle: {
    width: width * 0.9,
    height: width * 0.2,
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  ImageStyle2: {
    width: width * 0.9,
    height: width * 0.2,
    borderRadius: 10,
  },
  highlight: {
    fontWeight: '700',
  },
});
export default Cart;
