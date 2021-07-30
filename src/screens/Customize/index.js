import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

import Header from '../../components/Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TopImage = ({children, source}) => {
  return <View style={styles.ImageStyle}>{children}</View>;
};
const Customize = () => {
  return (
    <SafeAreaView>
      <Header title="Make your own pizza" />

      <TopImage>
        <Image
          style={styles.ImageStyle2}
          source={require('../../assets/wolf.jpg')}
        />
      </TopImage>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text> Customize </Text>
        </View>
      </ScrollView>
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

export default Customize;
