import { View, Text, StatusBar, StyleSheet, Image, FlatList, } from 'react-native'
import React from 'react'
import { ViewComponent, width, TouchableComponent } from '../Utilities/Helper'

const Items = [


    {
        image: require('../Utilities/Images/kurta.png'),
        title: "Women's  Casual Wear",
        text: 'Checked Single-Breasted  \nBlazer',
        color: 'Size 42',
        var: 'Qty 1',
        date: '7 July 2XXX',


    },
]

const Placeorder = ({navigation}) => {
    return (
        <ViewComponent>
            <StatusBar backgroundColor='#FFFFFF' barStyle={'dark-content'} />
            <View style={Styles.V1}>
                <TouchableComponent onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../Utilities/Images/Vector1.png')} style={Styles.img} />
                </TouchableComponent>
                <Text style={Styles.txt}>Checkout</Text>
                <TouchableComponent>
                    <Image source={require('../Utilities/Images/favorite.png')} style={Styles.img1} />
                </TouchableComponent>

            </View>

            <FlatList data={Items} renderItem={({ item, index }) => (
                <View style={Styles.FlatList}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, marginHorizontal: 10, marginTop: 30 }}>
                        <Image source={item.image} style={Styles.image} />
                        <View style={{ padding: 7,marginHorizontal:15 }}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: '600' }}>{item.title}</Text>
                            <Text style={{ color: 'black', fontSize: 16, marginVertical: 5 }}>{item.text}</Text>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <View style={{ height: width / 18, width: width / 6, alignItems: 'center', marginHorizontal: 5, backgroundColor: 'lightgrey' }}>
                                    <Text style={{fontSize:16}}>{item.color}</Text>

                                </View>
                                <View style={{ height: width / 18, width: width / 6, alignItems: 'center', marginHorizontal: 5, backgroundColor: 'lightgrey' }}>
                                    <Text style={{fontSize:16}}>{item.var}</Text>

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                                <Text style={{ color: 'black', fontSize: 16, }}>
                                    Delivery by
                                </Text>
                                <Text style={{ color: 'black', fontWeight: '700', marginHorizontal: 5, fontSize: 17, }}>{item.date}</Text>

                            </View>

                        </View>

                    </View>
                </View>
            )} />
            <View style={Styles.V2}>
                <View style={Styles.V3} >
                    <Image source={require('../Utilities/Images/coupon.png')} style={Styles.img3} />
                    <Text style={Styles.txt1}>
                        Apply Coupons
                    </Text>
                </View>
                <TouchableComponent>
                    <Text style={Styles.txt2}>Select</Text>
                </TouchableComponent>

            </View>
            <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginHorizontal: 20, }} />
            <View style={Styles.V4}>
                <Text style={Styles.txt5}>
                    Order Payment Details
                </Text>
                <View style={{ marginTop:20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Order Amounts</Text>
                        <Text style={Styles.txt5}>Rs 7,000.00</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row',alignItems:'center' }}>


                            <Text style={{ color: 'black', fontSize: 18 }}>Convenience</Text>
                            <TouchableComponent>
                                <Text style={Styles.txt4}>Know More</Text>
                            </TouchableComponent>
                        </View>
                        <Text style={Styles.txt3}>Apply Coupon</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'black', fontSize: 18 }}>Delivery Fee</Text>
                        <Text style={Styles.txt3}>Free</Text>

                    </View>
                </View>
            </View>
            <View style={{ borderBottomColor: '#C8C8C8', borderBottomWidth: 1, marginHorizontal: 20, marginTop: 20 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 20, }}>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: '500' }}>Order Total</Text>
                <Text style={Styles.txt5}>Rs 7,000.00</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 ,alignItems:'center'}}>


                <Text style={{ color: 'black', fontSize: 18}}>EMI  Available </Text>
                <TouchableComponent>
                    <Text style={Styles.txt4}> Details</Text>
                </TouchableComponent>

            </View>
            <View style={{  borderWidth: 1,marginTop:45, borderTopRightRadius: 50, height: width / 3.5,borderColor:'lightgrey', backgroundColor: '#EBEBEB', borderTopLeftRadius: 50 ,flexDirection:'row',alignItems:'center'}} >
                <View style={{ alignItems: 'center', marginHorizontal: 20, }}>
                    <Text style={Styles.txt5}>Rs7,000.00</Text>
                    <TouchableComponent>
                        <Text style={Styles.txt4}> view Details</Text>
                    </TouchableComponent>
                    </View>
                    <View>
                        <TouchableComponent style={{

                            width: width / 1.7,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 55,
                            backgroundColor: '#F83758',
                            borderRadius: 5,
                            marginVertical: 50


                        }} onPress={() => navigation.navigate('Shipping')}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Proceed To Payment</Text>
                        </TouchableComponent>
                  
                </View>
            </View>



        </ViewComponent>
    )
}

export default Placeorder
const Styles = StyleSheet.create({
    V1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 1.1,
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
        height: width / 25,
        width: width / 20
    },
    FlatList: {

        width: width / 1.1,
        marginVertical: 8,
        marginHorizontal: 10,

    },
    image: {
        height: width / 2.4,
        width: width / 3,
        alignSelf: 'center',
        borderRadius: 5

    },
    V2: {
        flexDirection: 'row',
        marginVertical: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    V3: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    img3: {
        height: width / 20,
        width: width / 12
    },

    txt1: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',
        marginHorizontal: 10
    },
    txt2: {
        fontSize: 16,
        color: '#F83758',
        fontWeight: '500'
    },
    V4: {
        marginHorizontal: 20,
        marginVertical: 30,
    }, txt3: {

        fontSize: 14,
        color: '#F83758',
        fontWeight: '500'
    },
    txt4: {

        fontSize: 14,
        color: '#F83758',
        fontWeight: '500',
        marginHorizontal: 10

    },
    txt5: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500',

    },
})