import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ViewComponent, TouchableComponent, width, Details, ButtonComponent, ButtonComponent1 } from '../Utilities/Helper'

const Profile = ({navigation}) => {
    return (
        <ViewComponent>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <View style={Styles.V1}>
                <TouchableComponent onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../Utilities/Images/Vector1.png')} style={Styles.img} />
                </TouchableComponent>
                <Text style={Styles.txt}>Checkout</Text>
            </View>
            <View style={Styles.V2}>
                <Image source={require('../Utilities/Images/profilephoto.png')} style={Styles.img1} resizeMode='contain' />
                <TouchableComponent >
                <Image source={require('../Utilities/Images/pencil1.png')} style={Styles.img2} resizeMode='contain' />
                </TouchableComponent>
            </View>
            <Text style={Styles.txt1}>
                Personal Details
            </Text>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                <Details text={'Email address'} placeholder={'enter your email'}></Details>
                <Details text={'Password'} placeholder={'enter your password'}></Details>
                <TouchableComponent>
                    <Text style={{ color: '#F83758', alignSelf: 'flex-end', textDecorationLine: 'underline' }}>Change Password</Text>
                </TouchableComponent>
                <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 40 }} />
                <Text style={Styles.txt2}>
                    Personal Details
                </Text>
                <Details text={'Pincode'} placeholder={'enter your pincode'}></Details>
                <Details text={'Address'}placeholder={'enter your address'}></Details>
                <Details text={'City'} placeholder={'enter your city'}></Details>
                <Details text={'State'}placeholder={'enter your state'}></Details>
                <Details text={'Country'} placeholder={'enter your country'}></Details>
                <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 40 }} />
                <Text style={Styles.txt2}>
                Bank Account Details
                </Text>
                <Details text={'Bank Account Number'} placeholder={'enter your account number'}></Details>
                <Details text={'Account Holder’s Name'}placeholder={'enter your account holder name'}></Details>
                <Details text={'IFSC Code'} placeholder={'enter your IFSC code'}></Details>
                <ButtonComponent1 title={'Save'} onPress={() => navigation.navigate('HomePage')}/>

            </View>




        </ViewComponent>

    )
}

export default Profile
const Styles = StyleSheet.create({
    V1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 1.9,

        marginVertical: 15,
        marginHorizontal: 20

    },
    img: {
        height: width / 20,
        width: width / 35
    },
    txt: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    img1: {
        height: width / 3.5,
        width: width / 3.5
    },
    V2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        
    }
    ,
    txt1: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        marginHorizontal: 20
    }
    ,
    txt2: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600',
        marginBottom: 20

    },
    img2: {
        height: width / 20,
        width: width / 35,
        bottom:32,
        left:40,
        tintColor:'white'
        
    },
})