import React from 'react';
import { View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import logoWhite from '../../../assets/logoWhite.png';
import facebook from '../../../assets/facebook.png';


export default function Login({ navigation }) {
  return (
    <LinearGradient 
      colors={['#990099', '#990099', '#cc0066']}
      style={styles.container}
    >
      <View style={styles.containerInstagram}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={logoWhite} style={styles.logo} />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={styles.inputs} 
            placeholder="Username" 
            maxLength={30}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={styles.inputs} 
            placeholder="Password" 
            maxLength={30}  
          />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Feed')}>
            <Text style={{ color: '#f0f0f0', textAlign: 'center' }}>Login in</Text>
          </TouchableOpacity>
        </View>
        

        <Text style={{ color: '#f0f0f0', textAlign: 'center', marginTop: 15 }}>
          Forgot your login details? Get help siging in.
        </Text>

        <View style={styles.facebook}>
          <Image source={facebook} 
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: '#f0f0f0', marginLeft: 15, fontWeight: 'bold' }}>Login in with facebook</Text>
        </View>

        <View style={styles.footer}>
          <Text  style={{ color: '#f0f0f0', textAlign: 'center' }}>
            Don't have an account? Sign up.
          </Text>
        </View>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerInstagram: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: 'rgba(228, 225, 225, 0.4)',   
    borderTopWidth: 1,
    borderTopColor: 'rgba(228, 225, 225, 0.4)', 
    paddingVertical: 20,
  },
  container: {
    height: '100%',
    width: '100%',
  },
  logo: {
    marginTop: 60,
    padding: 5,
    width: 210,
    height: 100,  
  },
  facebook: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputs: {
    textAlign: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'rgba(228, 225, 225, 0.37)',
    marginTop: 15,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    marginTop: 15,
    backgroundColor: 'rgba(228, 225, 225, 0.2)',
    borderColor: '#f0f0f0',
    borderWidth: 0.5,
  }
});
