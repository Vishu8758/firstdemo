import { View, Text, StyleSheet,StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ViewComponent, InputComponent, ButtonComponent, TouchableComponent ,Link} from '../Utilities/Helper';

const Signin = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        let valid = true;


        setEmailError('');
        setPasswordError('');


        if (email == '') {
            setEmailError('Email cannot be empty');
            valid = false;
        }


        else if (password == '') {
            setPasswordError('Password cannot be empty');
            valid = false;
        }


        if (valid) {

            alert('Login successful');
        }
    };

    

    return (
        <ViewComponent>
                        <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />

            <View style={Styles.V1}>
                <Text style={Styles.txt}>Welcome </Text>
                <Text style={Styles.txt}>Back!</Text>
            </View>
            <InputComponent placeholder={"Username or email"} source={require('../Utilities/Images/User.png')} value={email} onChange={(text) => setEmail(text)} />
            {emailError ? <Text style={Styles.error}>{emailError}</Text> : null}
            <InputComponent placeholder={"Password"} source={require('../Utilities/Images/Lock.png')}
                onPress={() => setShowPassword(!showPassword)}
                photo={showPassword ? require('../Utilities/Images/eyeclose.png') : require('../Utilities/Images/eye.png')} value={password} onChange={(text) => setPassword(text)} isPassword={showPassword}></InputComponent>
            {passwordError ? <Text style={Styles.error}>{passwordError}</Text> : null}
            <ButtonComponent title={'Login'} onPress={()=>navigation.navigate('StartPage')} ></ButtonComponent>
            <View style={Styles.V2}>
                <Text style={Styles.txt1}>- OR Continue with -</Text>
            </View>
            <View style={Styles.V3}>
                <Link source={require('../Utilities/Images/Google.png')}/>
                <Link source={require('../Utilities/Images/Apple.png')}/>
                <Link source={require('../Utilities/Images/Facebook.png')}/>

            </View>
            <View style={Styles.V4} >
                <Text style={Styles.txt2}>
                    Create An Account
                </Text>
                <TouchableComponent onPress={()=>navigation.navigate('SignUp')}>
                <Text style={Styles.txt3}>Sign Up</Text>
                </TouchableComponent>
            </View>
        </ViewComponent>

    )
}

export default Signin

const Styles = StyleSheet.create({
    txt: {
        fontSize: 38,
        color: 'black',
        fontWeight: '900'
    },
    V1: {
        paddingHorizontal: 25,
        marginVertical:30
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginVertical: 5,
        marginLeft: 25,
    },
    V2:{
        alignItems:'center',
        marginVertical:20
    },
    txt1: {
        fontSize: 15,
        
        
    },
    V3:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    V4:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:30,
        
    },
    txt2: {
        fontSize: 17,
    },
    txt3: {
        fontSize: 17,
        color:'#F83758',
        marginHorizontal:5,
        textDecorationLine: 'underline',
        fontWeight:'600'
    }
})