import { View, Text, StatusBar, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { HeaderComponent, Search, ViewComponent, width, height, Sort, TouchableComponent } from '../Utilities/Helper'
import { Rating, } from 'react-native-ratings';

const Items = [


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
    },

    {
        image: require('../Utilities/Images/hrx.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'Neque porro quisquam est  qui dolorem ipsum quia',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating:5
    }, {
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
        rating:5
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


const TrendingProd = () => {
    // const [rating, setRating] = useState(0);
    return (
        <ViewComponent>
            <StatusBar backgroundColor={'#F2F2F2'} barStyle={'dark-content'} />
            <HeaderComponent />
            <Search />
            <View style={Styles.V2}>
                <Text style={Styles.txt}>52,082+ Iteams </Text>
                <View style={Styles.V1}>
                    <Sort text='Sort' source={require('../Utilities/Images/Sort.png')}></Sort>
                    <Sort text='Filter' source={require('../Utilities/Images/Filter.png')}></Sort>
                </View>
            </View>

            <FlatList numColumns={2} style={Styles.flatlist} data={Items} renderItem={({ item, index }) => (
                <View style={{ elevation: 2, width: width / 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableComponent style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: 'white', width: width / 2.2, height: width / 1.58, marginVertical: 8, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <Image source={item.image} style={Styles.image} />
                        <View style={{ marginHorizontal: 5 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: '600' }}>{item.title}</Text>
                            <Text style={{ color: 'black', fontSize: 12,marginTop:5 }}>{item.text}</Text>
                            <Text style={{ color: 'black' }}>{item.price}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ textDecorationLine: 'line-through' }}>{item.ogprice}</Text>
                                <Text style={{ color: 'red' }}>{item.off}</Text>
                            </View>
                            <Rating
                                imageSize={15}
                                readonly
                                startingValue={item.rating}
                                style={{alignSelf:'flex-start' }}
                            />
                        </View>


                    </TouchableComponent>


                </View>

            )} />
        </ViewComponent>
    )
}

export default TrendingProd

const Styles = StyleSheet.create({

    txt: {
        color: 'black',
        fontWeight: '700',
        fontSize: 20
    },
    V1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width / 2.89,
        marginHorizontal: 20


    },
    V2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 10

    },
    flatlist: {

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