import { Button, Dimensions, TouchableOpacity, Text, TextInput, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const TouchableComponent = ({ style, onPress, children }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={style} onPress={onPress}>{children}</TouchableOpacity>
    )
}

export const ButtonComponent = ({ title, onPress }) => {
    return (
        <TouchableComponent onPress={onPress} style={{
            alignSelf: 'center',
            width: width / 1.12,
            justifyContent: 'center',
            alignItems: 'center',
            height: 65,
            backgroundColor: '#F83758',
            borderRadius: 10,
            marginVertical: 50


        }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>{title}</Text>
        </TouchableComponent>
    )
}

export const InputComponent = ({ placeholder, source, photo, value, onChange, onPress, isPassword }) => {

    return (
        <View style={{
            height: 65,
            width: width / 1.12,
            flexDirection: 'row',
            marginBottom: 25,
            alignSelf: 'center',
            borderWidth: 0.5,

            backgroundColor: '#F3F3F3',
            borderRadius: 10,
        }}>
            <Image source={source} style={{ height: width / 18, width: width / 18, alignSelf: 'center', tintColor: '#626262', marginHorizontal: 10 }} resizeMode="contain" />
            <TextInput style={{
                height: 55,
                width: width / 1.45,
                borderColor: 'black',
                alignSelf: 'center',

            }} placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isPassword}
            />
            {photo && <TouchableComponent style={{ alignSelf: 'center' }} onPress={onPress}>
                <Image source={photo} style={{ height: width / 18, width: width / 18, alignSelf: 'center', tintColor: '#626262', marginLeft: 8 }} resizeMode="contain" />
            </TouchableComponent>}
        </View>
    )
}
export const ViewComponent = ({ children }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView >
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export const Link = ({ source, style, text, }) => {
    return (
        <TouchableComponent>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={source} style={{ height: width / 7, width: width / 6, alignSelf: 'center' }} resizeMode='contain' />

            </View>
        </TouchableComponent>


    )
}

export const HeaderComponent = ({onPress}) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, marginHorizontal: 20 }}>
            <TouchableComponent>
                <Image source={require('../Utilities/Images/Threedot.png')} style={{ height: width / 10, width: width / 10 }} resizeMode="contain" />
            </TouchableComponent>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Image source={require('../Utilities/Images/Logo.png')} style={{ height: width / 10, width: width / 10 }} resizeMode="contain" />
                <Text style={{ color: '#4392F9', fontSize: 22, fontWeight: '600' }}> Stylish</Text>
            </View>
            <TouchableComponent onPress={onPress}>
                <Image source={require('../Utilities/Images/profile.png')} style={{ height: width / 10, width: width / 10 }} resizeMode="contain" />
            </TouchableComponent>
        </View>
    )
}

export const Search = () => {
    return (
        <View style={{
            height: 45,
            width: width / 1.12,
            flexDirection: 'row',
            marginBottom: 10,
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            marginVertical:20,
            elevation:1
        }}>
            <Image source={require('../Utilities/Images/Search.png')} style={{ height: width / 18, width: width / 18, alignSelf: 'center', tintColor: '#BBBBBB', marginHorizontal: 10 }} resizeMode="contain" />

            <TextInput style={{
                height: 55,
                width: width / 1.45,
                borderColor: 'black',
                alignSelf: 'center',
                fontSize:18

            }} placeholder=' Search any Product...'
            placeholderTextColor='#BBBBBB'

            />
            <Image source={require('../Utilities/Images/Mic.png')} style={{ height: width / 18, width: width / 18, alignSelf: 'center', tintColor: '#BBBBBB', marginHorizontal: 10 }} resizeMode="contain" />

        </View>
    )
}
 export  const Sort =({text,source}) => {
    return (
        <View style={{
            height: 25,
            width: width / 6.1,
            flexDirection: 'row',
            marginHorizontal:6,
            
            backgroundColor: 'white',
            borderRadius: 5,
            elevation:5,
            justifyContent:'center',
            alignItems:'center' }}> 
            <Text style={{fontSize:14,color:'black'}} >{text}</Text>
            <Image source={source} style={{height:width/25,width:width/25}} resizeMode="contain"/>
            </View>
    )
 }
 export const Size = ({text,textColor})=>{
    return(
        <View style={{height:width/12,width:width/8,borderWidth:2,borderColor:'#FA7189',borderRadius:5,justifyContent:'center'}}>
            <Text style={{color: textColor ? 'white' : '#FA7189', fontSize:15,  fontWeight:'500',alignSelf:'center',}}>{text} UK</Text>
        </View>
    )
 }
  export const Compare =({text,source})=>{
    return (
        <View style={{height:width/8,width:width/2.2,borderWidth:2,borderColor:'lightgrey',borderRadius:5,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',borderRadius:10}}> 
        <Image source={source} style= {{height:width/17,width:width/17}} resizeMode="contain"/>
        <Text style={{fontSize:16,color:'black',fontWeight:'500'}}>
            {text}
        </Text>
        </View>
    )
  }
  export const Details = ({text,placeholder})=>{
    return (
        <View>
            <Text style={{color:'black'}}>{text}</Text>

            <TextInput style={{height:height/18,width:width/1.1,borderWidth:1,borderColor:'#C8C8C8',marginVertical:20,padding:15,borderRadius:10}} placeholder={placeholder}/>
            </View>
            
    )
  }
  export const Payment =({onPress,source})=>{
    return(
        <TouchableComponent onPress={onPress} style={{
            alignSelf: 'center',
            width: width / 1.12,
            justifyContent:'center' ,
            alignItems: 'center',
            height: 60,
            backgroundColor: '#EBEBEB',
            borderRadius: 5,
            marginTop:20


        }}><View style={{flexDirection:'row',justifyContent:'space-between',width:width/1.3}}>
            <Image source={source} style={{height:width/7,width:width/7}} resizeMode="contain"/>
            <Text style={{fontSize:15,alignSelf:'center',justifyContent:'center'}}>*********2109</Text>
            </View>
        </TouchableComponent>
    )
  }

  export const Payment1 =({onPress,source})=>{
    return(
        <TouchableComponent onPress={onPress} style={{
            alignSelf: 'center',
            width: width / 1.12,
            justifyContent:'center' ,
            alignItems: 'center',
            height: 60,
            backgroundColor: '#EBEBEB',
            borderRadius: 5,
            marginTop:20


        }}><View style={{flexDirection:'row',justifyContent:'space-between',width:width/1.3}}>
            <Image source={source} style={{height:width/11,width:width/11}} resizeMode="contain"/>
            <Text style={{fontSize:15,alignSelf:'center',justifyContent:'center'}}>*********2109</Text>
            </View>
        </TouchableComponent>
    )
  }
  export const ButtonComponent1 = ({ title, onPress }) => {
    return (
        <TouchableComponent onPress={onPress} style={{
            alignSelf: 'center',
            width: width / 1.12,
            justifyContent: 'center',
            alignItems: 'center',
            height: 65,
            backgroundColor: '#F83758',
            borderRadius: 10,
            marginVertical: 20


        }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{title}</Text>
        </TouchableComponent>
    )
}