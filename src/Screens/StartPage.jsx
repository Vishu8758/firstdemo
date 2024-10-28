import { View, Text, ImageBackground, StyleSheet,StatusBar } from 'react-native';
import React from 'react';
import { ButtonComponent, ViewComponent } from '../Utilities/Helper';
import { height, TouchableComponent, width } from '../Utilities/Helper';
import { SafeAreaView } from 'react-native-safe-area-context';


const StartPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
                    {/* <StatusBar backgroundColor={'white'} barStyle={'dark-content'} /> */}

      <ImageBackground 
        source={require('../Utilities/Images/Photo.png')} 
        resizeMode="cover" 
        style={Styles.backgroundImage}
      >
        <View style={Styles.V1}>
            <Text style ={Styles.txt}>
                You want
            </Text >
            <Text style ={Styles.txt}>
                Authentic here
            </Text>
            <Text style ={Styles.txt}>
                you go!
            </Text>
        </View>
        <Text style ={Styles.txt1}> Find it here, buy it now!</Text>
        <ButtonComponent title={'Get Started'} onPress={()=> navigation.navigate('HomePage')}></ButtonComponent>
    
      </ImageBackground>
  </SafeAreaView>
  );
};

export default StartPage;

const Styles = StyleSheet.create({
  
  backgroundImage: {
    flex: 1,   
    justifyContent: 'center',   
    alignItems: 'center',  
    height:width/0.4,
    width:width/1
    
  },
  txt:{
    color:'white',
    fontSize:40,
    fontWeight:'800',
    textAlign:'center'
  },
  V1:{
    marginTop:600
  },
  txt1:{
    color:'white',
    fontSize:20,
   
    textAlign:'center'
  },
});
