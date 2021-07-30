import {useBackButton} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const List = ({children, title, cards}) => {
  const [modalSwitch, modalHandler] = useState(false);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <Modal
        visible={modalSwitch}
        onTouchCancel={true}
        transparent
        animationType="fade">
        <View style={styles.modalContainer}>
          {/* <Text>Hi</Text> */}
          {/* Close button  */}
          <TouchableOpacity
            onPress={() => {
              modalHandler(false);
            }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

{/* flatlist */}
      <FlatList
        data={cards}
        horizontal={true}
        keyExtractor={cards.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={
              () => modalHandler(true)
              // navigation.navigate('Product', {
              //   category: 'Todays special',
              //   data: item,
              // })
            }>
            {/* Image */}
            <View style={styles.circle}>
              <Image style={styles.cardImage} source={item.image} />
            </View>
            {/* Details  */}
            <View
              style={{
                alignContent: 'flex-start',
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
              }}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Text style={[styles.cardText, {backgroundColor: 'yellow'}]}>
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionDescription}>{children}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingLeft: 24,
  },
  sectionTitle: {
    color: 'yellow',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  card: {
    width: width * 0.4,
    height: width * 0.4,
    // flexDirection: 'row',
    // alignContent: 'center',
    resizeMode: 'contain',
    // justifyContent: 'center',
    // shadowColor: 'grey',
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.9,
    // shadowRadius: 7.49,

    backgroundColor: 'white',
    elevation: 15,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomRightRadius: 10,
    borderColor: 'yellow',
    overflow: 'visible',
    margin: 8,
  },
  circle: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    // alignSelf: 'flex-end',
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  cardImage: {
    backgroundColor: 'white',
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderRadius: 100 / 2,
  },
  cardText: {
    color: 'black',
    fontSize: 15,

    // overflow: 'visible',
    marginTop: 10,

    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  modalContainer: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: 'grey',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default List;
