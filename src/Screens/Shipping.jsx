import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { ViewComponent, width, TouchableComponent, Payment, ButtonComponent, Payment1 } from '../Utilities/Helper'
import Modal from "react-native-modal";

const Shipping = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ViewComponent>
            <StatusBar backgroundColor='#FFFFFF' barStyle={'dark-content'} />
            <View style={Styles.V1}>
                <TouchableComponent onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../Utilities/Images/Vector1.png')} style={Styles.img} />


                </TouchableComponent>
                <Text style={Styles.txt}>Checkout</Text>

            </View>
            <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 15 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 20, }}>
                <Text style={{ fontSize: 17, fontWeight: '400' }}>Order Total</Text>
                <Text style={{ fontSize: 17 }}>Rs 7,000.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 20, }}>
                <Text style={{ fontSize: 17, fontWeight: '400' }}>Shipping</Text>
                <Text style={{ fontSize: 17 }}>Rs 30.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, }}>
                <Text style={{ fontSize: 18, fontWeight: '400', color: 'black' }}>Total</Text>
                <Text style={{ fontSize: 17, color: 'black' }}>Rs 7,030.00</Text>
            </View>
            <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginHorizontal: 20, marginTop: 20 }} />
            <Text style={Styles.txt1}>
                Payment
            </Text>
            <View>
                <Payment source={require('../Utilities/Images/visa.png')}></Payment>
                <Payment source={require('../Utilities/Images/paypal.png')}></Payment>
                <Payment1 source={require('../Utilities/Images/maestro.png')}></Payment1>
                <Payment1 source={require('../Utilities/Images/AppleLogo.png')}></Payment1>

            </View>
            <ButtonComponent title={'Continue'} onPress={toggleModal} />
            <Modal isVisible={isModalVisible}>
                <View style={{ height: width / 1.8, width: width / 1.15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableComponent onPress={toggleModal}>
                        <Image source={require('../Utilities/Images/pink.png')} style={{ height: width / 3.5, width: width / 3.5 }} />
                        <Image source={require('../Utilities/Images/tick.png')} style={{ height: width / 7, width: width / 7, position: 'absolute', alignSelf: 'center', marginTop: 30 }} resizeMode='contain' />

                    </TouchableComponent>
                    <Text style={{ color: 'black', marginTop: 10, fontSize: 15, fontWeight: '500' }}> Payment done Successfully </Text>


                </View>
            </Modal>


        </ViewComponent>
    )
}

export default Shipping
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
        fontSize: 20,
        color: 'black',
        fontWeight: '700'
    },
    txt1: {
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 30,
        fontSize: 20,
        fontWeight: '500'
    }
})