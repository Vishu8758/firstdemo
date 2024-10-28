import { View, Text, StyleSheet ,StatusBar} from 'react-native'
import React, { useState } from 'react'
import { ViewComponent, InputComponent, ButtonComponent, TouchableComponent, Link } from '../Utilities/Helper';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
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
        else if (confirmPassword == '') {
            setConfirmPasswordError('Confirm Password cannot be empty');
            valid = false;
        }
        else if (password !== confirmPassword) {
            setConfirmPasswordError('Password and Confirm Password must be same');
            valid = false;
        }

        if (valid) {

            alert('Created account successful');
        }
    };



    return (
        <ViewComponent>

            <View style={Styles.V1}>
                <Text style={Styles.txt}>Create an </Text>
                <Text style={Styles.txt}>account</Text>
            </View>
            <InputComponent placeholder={"Username or email"} source={require('../Utilities/Images/User.png')} value={email} onChange={(text) => setEmail(text)} />
            {emailError ? <Text style={Styles.error}>{emailError}</Text> : null}
            <InputComponent placeholder={"Password"} source={require('../Utilities/Images/Lock.png')}
                onPress={() => setShowPassword(!showPassword)}
                photo={showPassword ? require('../Utilities/Images/eyeclose.png') : require('../Utilities/Images/eye.png')} value={password} onChange={(text) => setPassword(text)} isPassword={showPassword}></InputComponent>
            {passwordError ? <Text style={Styles.error}>{passwordError}</Text> : null}
            <InputComponent placeholder={"Confirm Password"} source={require('../Utilities/Images/Lock.png')}
                onPress={() => setShowPassword(!showPassword)}
                photo={showPassword ? require('../Utilities/Images/eyeclose.png') : require('../Utilities/Images/eye.png')} value={confirmPassword} onChange={(text) => setConfirmPassword(text)} isPassword={showPassword}></InputComponent>
            {confirmPasswordError ? <Text style={Styles.error}>{confirmPasswordError}</Text> : null}
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize: 15 }}> By clicking the <Text style={{ color: '#F83758' }}>Register </Text> button, you agree {'\n'} to the public offer</Text>
            </View>
            <ButtonComponent title={'Create Account'} onPress={handleLogin} ></ButtonComponent>
            <View style={Styles.V2}>
                <Text style={Styles.txt1}>- OR Continue with -</Text>
            </View>
            <View style={Styles.V3}>
                <Link source={require('../Utilities/Images/Google.png')} />
                <Link source={require('../Utilities/Images/Apple.png')} />
                <Link source={require('../Utilities/Images/Facebook.png')} />

            </View>
            <View style={Styles.V4} >
                <Text style={Styles.txt2}>
                    I Already  Have An Account
                </Text>
                <TouchableComponent onPress={() => navigation.navigate('Signin')}>
                    <Text style={Styles.txt3}>Login</Text>
                </TouchableComponent>
            </View>
        </ViewComponent>

    )
}

export default SignUp

const Styles = StyleSheet.create({
    txt: {
        fontSize: 38,
        color: 'black',
        fontWeight: '900'
    },
    V1: {
        paddingHorizontal: 25,
        marginVertical: 30
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginVertical: 5,
        marginLeft: 25,
    },
    V2: {
        alignItems: 'center',
        marginVertical: 13
    },
    txt1: {
        fontSize: 15,


    },
    V3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    V4: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,

    },
    txt2: {
        fontSize: 17,
    },
    txt3: {
        fontSize: 17,
        color: '#F83758',
        marginHorizontal: 5,
        textDecorationLine: 'underline',
        fontWeight: '600'
    }
})