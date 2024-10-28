import { View, Text, StatusBar, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { ViewComponent, width, TouchableComponent } from '../Utilities/Helper'
import { Rating, } from 'react-native-ratings';

const Items = [


    {
        image: require('../Utilities/Images/kurta.png'),
        title: 'Women  Casual wear',
        text: 'Neque porro quisquam est  qui   dolorem ipsum quia',
        color:'Black',
        var:'Red',

        price: '$ 34.00',
        off: 'upto40%Off',
        ogprice: '$ 64.00',
        rating: 4.5, rate: 4.5
    },
    {
        image: require('../Utilities/Images/jacket.png'),
        title: 'Jacket ',
        text: 'This warm and comfortable jacket is great for learni...',
        price: '$ 45.00',
        off: ' upto50%Off',
        ogprice: '$ 67.00',
        rating: 3, rate: 3,
         color:'Green',
        var:'Grey'


    },
]

const Checkout = ({navigation}) => {
    return (
        <ViewComponent>
            <StatusBar backgroundColor='#FFFFFF' barStyle={'dark-content'} />
            <View style={Styles.V1}>
                <TouchableComponent onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../Utilities/Images/Vector1.png')} style={Styles.img} />
                </TouchableComponent>
                <Text style={Styles.txt}>Checkout</Text>

            </View>

            <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 10 }} />
            <View style={Styles.V2}>
                <Image source={require('../Utilities/Images/location.png')} style={Styles.img1} resizeMode='contain' />
                <Text style={Styles.txt1}>Delivery Address</Text>
            </View>
            <View style={Styles.V5}>
                <View style={Styles.V3}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 1.6, marginHorizontal: 10, marginVertical: 10 }}>
                        <Text style={Styles.txt2}>Address :</Text>
                        <TouchableComponent>
                            <Image source={require('../Utilities/Images/Address.png')} style={Styles.img2} resizeMode='contain' />
                        </TouchableComponent>
                    </View>
                    <Text style={Styles.txt3}>
                        216 St Paul's Rd, London N1 2LL, UK
                        Contact :  +44-784232
                    </Text>
                </View>
                <View style={Styles.V4}>
                    <TouchableComponent >
                        <Image source={require('../Utilities/Images/ADD.png')} style={Styles.img3} resizeMode='contain' />
                    </TouchableComponent>
                </View>

            </View>
            <Text style={Styles.txt4}>Shopping List</Text>
            <FlatList style={Styles.flatlist} data={Items} renderItem={({ item, index }) => (
                

                <View style={{ backgroundColor: 'white', width: width / 1.1, marginVertical: 7, marginHorizontal: 10,elevation:2 }}>
                    <TouchableComponent onPress={() => navigation.navigate('Placeorder')}>
                    <View style={{ flexDirection: 'row',marginVertical: 10,marginHorizontal: 10 }}>
                        <Image source={item.image} style={Styles.image} />
                        <View style={{ padding: 7 }}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10 }}>
                                <Text style={{ color: 'black', fontSize: 17 }}>Variation :</Text>
                                <View style={{ height: width / 17, borderColor: 'black', borderWidth: 0.8, width: width / 7, alignItems: 'center',marginHorizontal:5,borderRadius:5 }}>

                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>{item.color}</Text>
                                </View>
                                <View style={{ height: width / 17, borderColor: 'black', borderWidth: 0.8, width: width / 7, alignItems: 'center',borderRadius:5 }}>

                                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>{item.var}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:10}}>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>{item.rate}</Text>
                                <Rating
                                    imageSize={13}
                                    readonly
                                    startingValue={item.rating}
                                    style={{  marginTop: 1,marginHorizontal:5 }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width / 2.3, marginVertical: 7,alignItems:'center' }}>
                                <View style={{ height: width / 12, borderColor: 'lightgrey', borderWidth: 1, width: width / 4.3, alignItems: 'center',borderRadius:5,justifyContent:'center' }}>

                                    <Text style={{ color: 'black', fontSize: 19, fontWeight: '600' }}>{item.price}</Text>
                                </View>
                                <View>

                                    <Text style={{ color: 'red',fontSize:10}}>{item.off}</Text>
                                    <Text style={{ textDecorationLine: 'line-through', fontSize: 18 }}>{item.ogprice}</Text>


                                </View>

                            </View>
                            

                        </View>
                        
                    </View>
                    <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginVertical: 5,marginHorizontal:10}} />
                    <View style={{ height: 23, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, borderColor: 'lightgrey',marginHorizontal:10}}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '400' }}>Total Order(1)   :</Text>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>{item.price}</Text>
                    </View>
                    </TouchableComponent>
                </View>
              )} />

        </ViewComponent>
    )
}

export default Checkout
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
    img1: {
        height: width / 16,
        width: width / 13
    },
    txt1: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    V2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 2.4,
        marginVertical: 10,
        marginHorizontal: 20
    },
    V3: {
        width: width / 1.5,
        height: width / 4.9,
        backgroundColor: 'white',
        elevation: 5
    },
    V4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 5,
        height: width / 4.9,
        backgroundColor: 'white',
        elevation: 5,
        marginHorizontal:5
    },
    V5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        width: width / 1.1,
        marginHorizontal: 20
    },
    txt2: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    img2: {
        height: width / 26,
        width: width / 22
    },
    txt3: {
        color: 'black',
        marginHorizontal: 10,
        fontSize:14
    },
    img3: {
        height: width / 15,
        width: width / 15
    },
    txt4: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
        marginHorizontal: 20,
        marginVertical: 8
    },
    image: {
        height: width / 2.7,
        width: width / 3,
        borderRadius:8,
    
        alignSelf: 'center'
    }




})