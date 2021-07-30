import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';

import Header from '../../components/Header';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../../components/context';
import { Users } from '../../components/data';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Login = ({navigation}) => {

  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  
  const {signIn} = useContext(AuthContext);

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}

const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}

const handleValidUser = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            isValidUser: false
        });
    }
}

const loginHandle = (userName, password) => {

    const foundUser = Users.filter( item => {
        return userName == item.username && password == item.password;
    } );

    if ( data.username.length == 0 || data.password.length == 0 ) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            {text: 'Okay'}
        ]);
        return;
    }

    if ( foundUser.length == 0 ) {
        Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'}
        ]);
        return;
    }
    signIn(foundUser);
}

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View styles={styles.imageView}>
        <Image
          style={styles.ImageStyle}
          source={require('../../assets/PIZZA.png')}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      {/* Forget password */}
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Alert', //title
            'Enter your Email', //msg
            //button
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
            ],
            {
              cancelable: true,
            },
          );
        }}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login function */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          console.log(email, password);
        }}
        onPress={() => {
          signIn
          // navigation.navigate('Activity');
        }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    backgroundColor: 'yellow',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  highlight: {
    fontWeight: '700',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFFF99',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    // backgroundColor: 'silver',
    height: 50,
    // width: '50%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  ImageStyle: {
    width: width * 0.4,
    height: width * 0.4,
    // flex:3,
    borderRadius: 50,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFFF14',
  },
  
});

export default Login;
