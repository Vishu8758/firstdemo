import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '../Screens/Slider';
import Signin from '../Screens/Signin';
import SignUp from '../Screens/SignUp';
import StartPage from '../Screens/StartPage';
import HomePage from '../Screens/HomePage';
import TrendingProd from '../Screens/TrendingProd';
import Shoppage from '../Screens/Shoppage';
import Profile from '../Screens/Profile';
import Checkout from '../Screens/Checkout';
import Placeorder from '../Screens/Placeorder';
import Shipping from '../Screens/Shipping';

const stack = createNativeStackNavigator();


const Stack = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer >
        <stack.Navigator screenOptions={{ headerShown: false }}>


          <stack.Screen name="Slider" component={Slider} />
          <stack.Screen name="Signin" component={Signin} />
          <stack.Screen name="SignUp" component={SignUp} />
          <stack.Screen name="StartPage" component={StartPage} />
          <stack.Screen name="HomePage" component={HomePage} />
          <stack.Screen name="TrendingProd" component={TrendingProd} />
          <stack.Screen name="Shoppage" component={Shoppage} />
          <stack.Screen name="Profile" component={Profile} />
          <stack.Screen name="Checkout" component={Checkout} />
          <stack.Screen name="Placeorder" component={Placeorder} />
          <stack.Screen name="Shipping" component={Shipping} />









        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Stack