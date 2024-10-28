import { View, Text, StatusBar, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { height, TouchableComponent, ViewComponent, width, Size, Compare, Sort } from '../Utilities/Helper'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Rating, } from 'react-native-ratings';


const Items = [
    {
        image: require('../Utilities/Images/hrx.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'Neque porro quisquam est  qui dolorem ipsum quia',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: 5
    },


    {
        image: require('../Utilities/Images/kurta.png'),
        title: 'Women Printed Kurta',
        text: 'Neque porro quisquam est  qui   dolorem ipsum quia',
        price: '₹1500',
        off: '40%Off',
        ogprice: '₹2499',
        rating: 3
    },

    {
        image: require('../Utilities/Images/nike.png'),
        title: 'NIke Sneakers',
        text: 'Nike Air Jordan Retro 1  Low Mystic Black',
        price: '₹1900',
        off: '40%Off',
        ogprice: '₹2999',
        rating: 4
    }

    , {
        image: require('../Utilities/Images/watch.png'),
        title: 'Watch',
        text: 'IWC Schaffhausen 2021 Pilot Watch "SIHH 2019" 44mm',
        price: '₹1500',
        off: '40%Off',
        ogprice: '₹2499',
        rating: 1
    },

    {
        image: require('../Utilities/Images/shoes.png'),
        title: 'NIke Sneakers',
        text: 'Labbin White Sneakers best  both For Men and Female',
        price: '₹1900',
        off: '40%Off',
        ogprice: '₹2999',
        rating: 1


    },

    {
        image: require('../Utilities/Images/jordan.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'Mid Peach Mocha Shoes For Man White Black Pink S...',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: 3

    },
    {
        image: require('../Utilities/Images/jacket.png'),
        title: 'Jacket ',
        text: 'This warm and comfortable jacket is great for learni...',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: 3


    },
    {
        image: require('../Utilities/Images/Realme.png'),
        title: 'Realme 7',
        text: '6 GB RAM | 64 GB ROM | Expandable Upto 256...',
        price: '₹15000',
        off: '40%Off',
        ogprice: '₹24999',
        rating: 5
    },

    {
        image: require('../Utilities/Images/nikejordan.png'),
        title: 'Jordan Stay',
        text: 'The classic Air Jordan 12 to create a shoe thats fres...',
        price: '₹1900',
        off: '40%Off',
        ogprice: '₹2999',
        rating: 1


    },
    {
        image: require('../Utilities/Images/Ps4.png'),
        title: 'Sony PS4',
        text: 'Sony PS4 Console, 1TB Slim with 3 Games: Gran Turis...',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: 5


    },
    {
        image: require('../Utilities/Images/Camera.png'),
        title: 'D7200 Digital C...',
        text: 'D7200 Digital Camera (Nikon) In New Area.',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: 4


    },
]




const Nike = [
    { image: require('../Utilities/Images/Nj.png') },
    { image: require('../Utilities/Images/jordan.png') },
    { image: require('../Utilities/Images/hrx.png') },
    { image: require('../Utilities/Images/nike.png') },
    { image: require('../Utilities/Images/shoes.png') },
]



const Shoppage = ({ navigation }) => {
    const [size, setSize] = useState();
    console.log(size);
    return (
        <ViewComponent>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
            <View style={Styles.V1}>
                <TouchableComponent onPress={() => navigation.navigate('HomePage')}>
                    <Image source={require('../Utilities/Images/Vector1.png')} style={Styles.img} />
                </TouchableComponent>
                <TouchableComponent style={Styles.touch} onPress={() => navigation.navigate('Checkout')}>
                    <Image source={require('../Utilities/Images/cart.png')} style={Styles.img1} />
                </TouchableComponent>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 15, height: width / 1.6 }}>
                <SwiperFlatList
                    data={Nike}
                    showPagination
                    paginationStyle={{ alignSelf: 'center', position: 'absolute', marginVertical: 2 }}
                    resizeMode='contain'
                    paginationStyleItem={{
                        width: 10,
                        height: 10,
                        borderRadius: 15,


                    }}
                    paginationStyleItemActive={{
                        backgroundColor: '#F83758',
                    }}
                    renderItem={({ item }) => (
                        <View style={{ width: width / 1, height: height / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={item.image} style={{ width: width / 1.1, height: height / 4, borderRadius: 20 }} />
                        </View>
                    )}
                />
            </View >
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={Styles.txt}>Size: {size} UK</Text>

                <FlatList horizontal data={[6, 7, 8, 9, 10]} style={{}}
                    renderItem={({ item }) => {
                        return (
                            <TouchableComponent style={{ marginHorizontal: 4, marginTop: 10, backgroundColor: item == size ? '#FA7189' : 'white', borderRadius: 5 }} onPress={() => { setSize(item) }}>


                                <View>
                                    <Size text={item} textColor={item == size ? true : false}></Size>
                                </View>
                            </TouchableComponent>
                        )
                    }}
                />
            </View>
            <View style={Styles.V2}>
                <Text style={Styles.txt1}>
                    Nike Sneakers
                </Text>
                <Text style={Styles.txt2}>
                    Vision Alta Men’s Shoes Size (All Colours)
                </Text>
                <Rating
                    imageSize={16}
                    readonly
                    startingValue={3.5}
                    style={{ alignSelf: 'flex-start', marginVertical: 8, backgroundColor: '' }}
                />
                <View style={Styles.V3}>
                    <Text style={Styles.txt3}>₹2,999</Text>
                    <Text style={Styles.txt4}>₹1,500</Text>
                    <Text style={Styles.txt5}>50% Off</Text>
                </View>
                <Text style={Styles.txt6}>Product Details</Text>
                <Text style={Styles.txt7}>
                    Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is
                    the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan,
                    the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1.
                    This 2015 release saw the ...More
                </Text>

                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TouchableComponent>
                        <View style={{ height: width / 13, width: width / 3.6, borderWidth: 2, borderColor: '#828282', borderRadius: 5, justifyContent: 'center', flexDirection: 'row' }}>
                            <Image source={require('../Utilities/Images/Nearby.png')} style={Styles.img2} />
                            <Text style={{ fontSize: 11, fontWeight: '500', alignSelf: 'center', }}> Nearby Store</Text>
                        </View>
                    </TouchableComponent>
                    <View style={{ height: width / 13, width: width / 7, borderWidth: 2, borderColor: '#828282', borderRadius: 5, justifyContent: 'center', flexDirection: 'row', marginHorizontal: 4 }}>
                        <Image source={require('../Utilities/Images/Lock.png')} style={Styles.img3} resizeMode='contain' />
                        <Text style={{ fontSize: 11, fontWeight: '500', alignSelf: 'center', }}>VIP</Text>
                    </View>
                    <View style={{ height: width / 13, width: width / 3.8, borderWidth: 2, borderColor: '#828282', borderRadius: 5, justifyContent: 'center', flexDirection: 'row' }}>
                        <Image source={require('../Utilities/Images/Return.png')} style={Styles.img2} />
                        <Text style={{ fontSize: 11, fontWeight: '500', alignSelf: 'center', }}>Return Policy</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 35, flexDirection: 'row', marginVertical: 10 }}>
                <View style={{ height: width / 11, width: width / 3.5, borderRadius: 5, justifyContent: 'flex-end', flexDirection: 'row', backgroundColor: "#4169e1" }}>

                    <Text style={{ fontSize: 15, fontWeight: '600', alignSelf: 'center', color: 'white', marginRight: 8 }}>Go to Cart</Text>
                </View>
                <TouchableComponent style={Styles.touch1} onPress={() => navigation.navigate('Checkout')}>
                    <Image source={require('../Utilities/Images/cart.png')} style={Styles.img4} />
                </TouchableComponent>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ height: width / 11, width: width / 3.4, borderRadius: 5, justifyContent: 'flex-end', flexDirection: 'row', backgroundColor: "#90ee90" }}>

                        <Text style={{ fontSize: 15, fontWeight: '600', alignSelf: 'center', color: 'white', marginRight: 15 }}>Buy Now</Text>
                    </View>
                    <TouchableComponent style={Styles.touch2}>
                        <Image source={require('../Utilities/Images/touch.png')} style={Styles.img4} />
                    </TouchableComponent>
                </View>

            </View>
            <View style={Styles.V7}>
                <Text style={Styles.txt8}>
                    Delivery in
                </Text>
                <Text style={Styles.txt9}>
                    1 within Hour
                </Text>
            </View>
            <View style={{ marginHorizontal: 10, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Compare source={require('../Utilities/Images/eye.png')} text={'View Similar'}></Compare>
                <Compare source={require('../Utilities/Images/Compare.png')} text={'Add to Compare'}></Compare>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={Styles.txt10}> Similar To</Text>
                <View style={Styles.V13}>

                    <Text style={Styles.txt}>52,082+ Iteams </Text>

                    <View style={Styles.V12}>
                        <Sort text='Sort' source={require('../Utilities/Images/Sort.png')}></Sort>
                        <Sort text='Filter' source={require('../Utilities/Images/Filter.png')}></Sort>
                    </View>
                </View>
            </View>
            <FlatList numColumns={2} data={Items} renderItem={({ item, index }) => (
                <View style={{ elevation: 2, width: width / 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableComponent style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: 'white', width: width / 2.2, height: width / 1.58, marginVertical: 8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 3 }}>
                        <Image source={item.image} style={Styles.image} />
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>{item.title}</Text>
                            <Text style={{ color: 'black', fontSize: 12 }}>{item.text}</Text>
                            <Text style={{ color: 'black' }}>{item.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ textDecorationLine: 'line-through' }}>{item.ogprice}</Text>
                                <Text style={{ color: 'red' }}>{item.off}</Text>
                            </View>
                            <Rating
                                imageSize={15}
                                readonly
                                startingValue={item.rating}
                                style={{ alignSelf: 'flex-start', backgroundColor: '#FFFFFF' }}
                            />
                        </View>


                    </TouchableComponent>


                </View>

            )} />


        </ViewComponent>
    )
}

export default Shoppage

const Styles = StyleSheet.create({
    V1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15

    },
    img: {
        height: width / 20,
        width: width / 35

    },
    img1: {
        height: width / 15,
        width: width / 15, position: 'absolute',
    },
    touch: {
        height: width / 10,
        width: width / 10,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 20
    },
    txt: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
    },
    V2: {
        marginHorizontal: 20,
        marginVertical: 0
    },
    txt1: {
        fontSize: 23,
        color: 'black',
        fontWeight: '600'
    },
    txt2: {
        fontSize: 16,
        color: 'black',
        marginTop: 5

    },
    V3: {
        flexDirection: 'row'
    },
    txt3: {
        fontSize: 17,
        textDecorationLine: 'line-through',
    },
    txt4: {
        fontSize: 17,
        color: 'black',
        marginHorizontal: 10

    },
    txt5: {
        fontSize: 16,
        color: '#FA7189',
        fontWeight: '600'


    },
    txt6: {
        fontSize: 17,
        color: 'black',
        fontWeight: '500',
        marginVertical: 5

    },
    txt7: {
        fontSize: 14,
        textAlign: 'justify',
        color: 'black'
    }
    , img2: {
        height: width / 22,
        width: width / 22,
        marginTop: 4
    },
    img3: {
        height: width / 30,
        width: width / 28,
        marginTop: 4,
    },
    touch1: {
        height: width / 11,
        width: width / 11,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 22,
        position: 'absolute',
        marginLeft: -15,
        borderWidth: 0.9,
        elevation: 2,

    },
    img4: {
        height: width / 18,
        width: width / 18,
        position: 'absolute',
        tintColor: 'white'
    },
    touch2: {
        height: width / 11,
        width: width / 11,
        backgroundColor: '#90ee90',
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 22,
        position: 'absolute',
        marginLeft: -15,
        borderWidth: 0.9,
        elevation: 2,

    },
    V7: {

        height: width / 6,
        width: width / 1.1,
        borderRadius: 10,

        backgroundColor: '#FFCCD5',
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: 'center'

    },
    txt8: {
        fontSize: 18,
        color: 'black',
        marginHorizontal: 30,
        fontWeight: '500'

    },
    txt9: {
        fontSize: 22,
        color: 'black',
        marginHorizontal: 30,
        fontWeight: '600'

    },
    txt10: {
        color: 'black',
        fontWeight: '700',
        fontSize: 22
    }, V12: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width / 2.89,



    },
    V13: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        alignItems: 'center',
        marginVertical: 10

    },
    image: {
        height: width / 2.8,
        width: width / 2.19,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    image1: {
        height: width / 10,
        width: width / 3.5

    },

})