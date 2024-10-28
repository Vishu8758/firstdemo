import { View, Text, StatusBar, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { HeaderComponent, Search, Sort, width, TouchableComponent } from '../Utilities/Helper'
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const Menu = [

    {
        image: require('../Utilities/Images/6.png'), text: 'Beauty'
    },
    {
        image: require('../Utilities/Images/7.png'), text: 'Fashion'
    },
    {
        image: require('../Utilities/Images/8.png'), text: 'Kids'
    },
    {
        image: require('../Utilities/Images/4.png'), text: 'Mens'
    },
    {
        image: require('../Utilities/Images/5.png'), text: 'Womens'
    },
]

const Items = [
    {
        image: require('../Utilities/Images/kurta.png'),
        title: 'Women Printed Kurta',
        text: 'Neque porro quisquam est  qui   dolorem ipsum quia',
        price: '₹1500',
        off: '40%Off',
        ogprice: '₹2499',
        rating: require('../Utilities/Images/Rating.png')
    },

    {
        image: require('../Utilities/Images/nike.png'),
        title: 'NIke Sneakers',
        text: 'Nike Air Jordan Retro 1  Low Mystic Black',
        price: '₹1900',
        off: '40%Off',
        ogprice: '₹2999',
        rating: require('../Utilities/Images/Rating.png')
    },

    {
        image: require('../Utilities/Images/hrx.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'Neque porro quisquam est  qui dolorem ipsum quia',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',
        rating: require('../Utilities/Images/Rating.png')
    },

]


const Products = [
    {
        image: require('../Utilities/Images/watch.png'),
        title: 'Women Printed Kurta',
        text: 'IWC Schaffhausen 2021 Pilot Watch "SIHH 2019" 44mm',
        price: '₹1500',
        off: '40%Off',
        ogprice: '₹2499',
        rating: require('../Utilities/Images/Rating.png')
    },

    {
        image: require('../Utilities/Images/shoes.png'),
        title: 'NIke Sneakers',
        text: 'Labbin White Sneakers best  both For Men and Female',
        price: '₹1900',
        off: '40%Off',
        ogprice: '₹2999',

    },

    {
        image: require('../Utilities/Images/jordan.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'Mid Peach Mocha Shoes For Man White Black Pink S...',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',

    },
    {
        image: require('../Utilities/Images/jacket.png'),
        title: 'HRX by Hrithik Roshan',
        text: 'This warm and comfortable jacket is great for learni...',
        price: '₹2499',
        off: '50%Off',
        ogprice: '₹4999',

    },
]

const HomePage = ({ navigation }) => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const swiperNew = useRef(null);
    const [currentNewIndex, setCurrentNewIndex] = useState(0);



    const handleNext = () => {
        if (swiperRef.current && currentIndex < Items.length - 1) {
            const newIndex = currentIndex + 1;
            swiperRef.current.scrollToIndex({ index: newIndex, animated: true });
            setCurrentIndex(newIndex);
        }
    };


    const handlePrev = () => {
        if (swiperRef.current && currentIndex > 0) {
            const newIndex = currentIndex - 1;
            swiperRef.current.scrollToIndex({ index: newIndex, animated: true });
            setCurrentIndex(newIndex);
        }
    };

    const handleNewNext = () => {
        if (swiperNew.current && currentNewIndex < Items.length - 1) {
            const newIndex = currentNewIndex + 1;
            swiperNew.current.scrollToIndex({ index: newIndex, animated: true });
            setCurrentNewIndex(newIndex);
        }
    };


    const handleNewPrev = () => {
        if (swiperNew.current && currentNewIndex > 0) {
            const newIndex = currentNewIndex - 1;
            swiperNew.current.scrollToIndex({ index: newIndex, animated: true });
            setCurrentNewIndex(newIndex);
        }
    };
    return (
        <View style={{ backgroundColor: '#F2F2F2' }}>
            <ScrollView>
                <StatusBar backgroundColor={'#F2F2F2'} barStyle={'dark-content'} />
                <HeaderComponent onPress={() => navigation.navigate('Profile')} />
                <Search />
                <View style={Styles.V2}>
                    <Text style={Styles.txt}>All Featured</Text>
                    <View style={Styles.V1}>
                        <Sort text='Sort' source={require('../Utilities/Images/Sort.png')}></Sort>
                        <Sort text='Filter' source={require('../Utilities/Images/Filter.png')}></Sort>

                    </View>
                </View>
                <View style={{ backgroundColor: '#FFFFFF', height: width / 3.2, width: width / 1.06, borderRadius: 10, marginHorizontal: 10, marginVertical: 20 }}>
                    <FlatList showsHorizontalScrollIndicator={false} style={Styles.flatlist} horizontal data={Menu} renderItem={({ item, index }) => (
                        <View style={{ marginHorizontal: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableComponent>
                                <Image source={item.image} style={{ height: width / 6, width: width / 6 }} />
                            </TouchableComponent>
                            <Text style={Styles.txt1}>
                                {item.text}
                            </Text>
                        </View>

                    )} />
                </View>
                <View style={Styles.V3}>
                    <Image source={require('../Utilities/Images/Sale.png')} style={Styles.img} resizeMode='stretch' />
                    <View style={Styles.V4}>
                        <Text style={Styles.txt2}>50-40% OFF</Text>
                        <Text style={Styles.txt3}>Now in (product)</Text>
                        <Text style={Styles.txt4}>All colours</Text>
                        <TouchableComponent onPress={() => navigation.navigate('TrendingProd')}>
                            <View style={Styles.V5}>
                                <Text style={Styles.txt4}>
                                    Shop Now
                                </Text>
                                <Image source={require('../Utilities/Images/teer.png')} style={Styles.img1} resizeMode='contain' />
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
                <View style={Styles.V6}>
                    <View style={{ height: width / 35, width: width / 35, backgroundColor: '#DEDBDB', borderRadius: 20, marginHorizontal: 5, }}></View>
                    <View style={{ height: width / 35, width: width / 35, backgroundColor: '#FFA3B3', borderRadius: 20, marginHorizontal: 5 }}></View>
                    <View style={{ height: width / 35, width: width / 35, backgroundColor: '#DEDBDB', borderRadius: 20, marginHorizontal: 5 }}></View>

                </View>
                <View style={Styles.V7}>
                    <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                        <Text style={Styles.txt3}>
                            Deal of the Day
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../Utilities/Images/Clock.png')} style={Styles.img3} />
                            <Text style={{ color: 'white' }}> 22h 55m 20s remaining </Text>

                        </View>

                    </View>
                    <TouchableComponent onPress={() => navigation.navigate('Shoppage')}>
                        <View style={Styles.V8}>
                            <Text style={Styles.txt4}>
                                View All
                            </Text>
                            <Image source={require('../Utilities/Images/teer.png')} style={Styles.img1} />
                        </View>
                    </TouchableComponent>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: '#F2F2F2' }} >
                    <SwiperFlatList
                        data={Items}
                        ref={swiperRef}
                        showPagination={false}
                        renderItem={({ item }) => (
                            <View style={{ marginHorizontal: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, backgroundColor: 'white', height: width / 1.5, width: width / 2.31, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                                <TouchableComponent>
                                    <View >
                                        <Image source={item.image} style={Styles.image} />
                                        <View style={{ marginHorizontal: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 14 }}>{item.title}</Text>
                                            <Text style={{ color: 'black', fontSize: 12 }}>{item.text}</Text>
                                            <Text style={{ color: 'black' }}>{item.price}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ textDecorationLine: 'line-through' }}>{item.ogprice}</Text>
                                                <Text style={{ color: 'red' }}>{item.off}</Text>
                                            </View>
                                            <Image source={item.rating} style={Styles.image1} resizeMode='contain' />
                                        </View>

                                    </View>
                                </TouchableComponent>
                            </View>


                        )}
                    />
                    <View style={Styles.navigationButtons}>
                        {currentIndex > 0 ? <TouchableComponent onPress={handlePrev} disabled={currentIndex === 0} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, height: width / 10, width: width / 10, justifyContent: 'center' }}>
                            <Image source={require('../Utilities/Images/Vector1.png')} style={{ height: width / 15, width: width / 15, alignSelf: 'center' }} resizeMode='contain' />

                        </TouchableComponent> : <Text></Text>}
                        {currentIndex < Items.length - 1 && (<TouchableComponent onPress={handleNext} disabled={currentIndex === Items.length - 1} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, height: width / 10, width: width / 10, justifyContent: 'center' }}>
                            <Image source={require('../Utilities/Images/Vector.png')} style={{ height: width / 15, width: width / 15, alignSelf: 'center' }} resizeMode='contain' />

                        </TouchableComponent>)}
                    </View>

                </View>

                <View style={{ marginHorizontal: 20, marginVertical: 10, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center', borderRadius: 20, height: width / 3.5 }} >
                    <Image source={require('../Utilities/Images/offer.png')} style={Styles.img4} resizeMode='contain' />
                    <View style={{ marginLeft: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>Spe

                                cial Offers</Text>
                            <Image source={require('../Utilities/Images/emoji.png')} style={Styles.img5} resizeMode='contain' />
                        </View>
                        <Text style={{ color: 'black', fontSize: 14 }}>We make sure you get the {"\n"} offer you need at best prices</Text>
                    </View>

                </View>
                <View style={Styles.V9}>
                    <Image source={require('../Utilities/Images/Heel.png')} style={Styles.img6} resizeMode='contain' />
                    <View style={{ marginRight: 10 }} >
                        <Text style={Styles.txt6}>
                            Flat and Heels
                        </Text>
                        <Text style={Styles.txt5}>Stand a chance to get rewarded</Text>
                        <View style={Styles.V10}>
                            <Text style={{ color: 'white', fontSize: 15 }}>
                                Visit now
                            </Text>
                            <Image source={require('../Utilities/Images/teer.png')} style={Styles.img1} />
                        </View>
                    </View>

                </View>
                <View style={Styles.V11}>
                    <View style={{ justifyContent: 'center', marginLeft: 8 }}>
                        <Text style={Styles.txt3}>
                            Trending Products
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../Utilities/Images/calender.png')} style={Styles.img3} />
                            <Text style={{ color: 'white' }}> Last Date 29/02/22 </Text>

                        </View>

                    </View>
                    <TouchableComponent onPress={() => navigation.navigate('TrendingProd')}>
                        <View style={Styles.V8}>
                            <Text style={Styles.txt4}>
                                View All
                            </Text>
                            <Image source={require('../Utilities/Images/teer.png')} style={Styles.img1} />
                        </View>
                    </TouchableComponent>
                </View>
                <View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: '#F2F2F2' }} >
                    <SwiperFlatList
                        data={Products}
                        ref={swiperNew}
                        showPagination={false}
                        renderItem={({ item }) => (
                            <View style={{ marginHorizontal: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, marginVertical: 10, backgroundColor: 'white', height: width / 1.59, width: width / 2.31, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <TouchableComponent>
                                    <View >
                                        <Image source={item.image} style={Styles.image} />
                                        <View style={{ marginHorizontal: 5 }}>
                                            {/* <Text style={{ color: 'black', fontSize: 17 }}>{item.title}</Text> */}
                                            <Text style={{ color: 'black', fontSize: 17 }}>{item.text}</Text>
                                            <Text style={{ color: 'black' }}>{item.price}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ textDecorationLine: 'line-through' }}>{item.ogprice}</Text>
                                                <Text style={{ color: 'red' }}>{item.off}</Text>
                                            </View>
                                            {/* <Image source={item.rating} style={Styles.image1} resizeMode='contain' /> */}
                                        </View>

                                    </View>
                                </TouchableComponent>
                            </View>


                        )}
                    />
                    <View style={Styles.navigationButtons}>
                        {currentNewIndex > 0 ? <TouchableComponent onPress={handleNewPrev} disabled={currentNewIndex === 0} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, height: width / 10, width: width / 10, justifyContent: 'center' }}>
                            <Image source={require('../Utilities/Images/Vector1.png')} style={{ height: width / 15, width: width / 15, alignSelf: 'center' }} resizeMode='contain' />

                        </TouchableComponent> : <Text></Text>}
                        {currentNewIndex < Items.length - 1 && (<TouchableComponent onPress={handleNewNext} disabled={currentNewIndex === Items.length - 1} style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 20, height: width / 10, width: width / 10, justifyContent: 'center' }}>
                            <Image source={require('../Utilities/Images/Vector.png')} style={{ height: width / 15, width: width / 15, alignSelf: 'center' }} resizeMode='contain' />

                        </TouchableComponent>)}
                    </View>

                </View>
                <View style={Styles.V12}>
                    <Image source={require('../Utilities/Images/HSS.png')} style={Styles.sale} />
                    <Text style={Styles.txt7}>New Arrivals </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 15 }}>
                        <Text style={Styles.txt8}>Summer’ 25 Collections</Text>
                        <TouchableComponent>
                            <View style={Styles.V13}>
                                <Text style={Styles.txt4}>
                                    View All
                                </Text>
                                <Image source={require('../Utilities/Images/teer.png')} style={Styles.img1} />
                            </View>
                        </TouchableComponent>
                    </View>
                </View>
                <View style={Styles.V14} >
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={Styles.txt9}>Sponserd</Text>
                        <Image source={require('../Utilities/Images/off.png')} style={Styles.off} resizeMode='contain' />
                        <TouchableComponent>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '900' }}>up to 50% Off</Text>
                                <Image source={require('../Utilities/Images/Vector.png')} style={{ height: width / 25, width: width / 13, alignSelf: 'center' }} resizeMode='contain' />

                            </View>
                        </TouchableComponent>

                    </View>
                </View>


            </ScrollView>
        </View>
    )
}

export default HomePage
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
        marginTop: 10

    },
    flatlist: {
        marginHorizontal: 10,
        marginVertical: 20,

    },
    txt1: {
        color: 'black',

        fontSize: 15
    },
    V3: {


        marginHorizontal: 20,
        marginVertical: 10



    },
    img: {
        height: width / 1.8,
        width: width / 1.1

    },
    V4: {
        marginHorizontal: 20,
        position: 'absolute',
        marginVertical: 30

    },
    txt2: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
    },
    txt3: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10

    },
    txt4: {
        color: 'white',
        fontSize: 18,

    },
    img1: {
        height: width / 20,
        width: width / 25

    },
    V5: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: width / 8,
        width: width / 3.5,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 10,
        marginVertical: 12

    },
    img2: {
        height: width / 15,
        width: width / 18,
        alignSelf: 'center'

    },
    V6: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        justifyContent: 'center',
    },
    V7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: width / 6.4,
        width: width / 1.1,
        borderRadius: 10,

        backgroundColor: '#4392F9',
        marginHorizontal: 20,
        marginVertical: 8

    },
    img3: {
        height: width / 23,
        width: width / 23,
        alignSelf: 'center'

    },
    V8: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: width / 12,
        width: width / 4,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 6,
        marginVertical: 17,
        right: 15


    },
    image: {
        height: width / 2.8,
        width: width / 2.3,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderRadius: 10

    },
    image1: {
        height: width / 10,
        width: width / 3.5

    },
    img4: {
        height: width / 5,
        width: width / 3.5,


    }, navigationButtons: {
        flexDirection: 'row',
        position: 'absolute', top: "50%",
        justifyContent: 'space-between',
        width: "100%"
    },
    img5: {
        height: width / 18,
        width: width / 15

    },
    V9: {
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 5,
        width: width / 1.1,
        height: width / 2,
        borderLeftWidth: 15,
        justifyContent: 'space-evenly',
        borderColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'



    },
    img6: {
        height: width / 1,
        width: width / 3,


    },
    txt6: {
        color: 'black',
        fontSize: 24,
        alignSelf: 'center'

    },
    txt5: {
        color: 'black',



    },
    V10: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: width / 14,
        width: width / 4.2,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F83758',
        alignSelf: 'flex-end',
        marginVertical: 12

    },
    V11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: width / 6,
        width: width / 1.1,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#FD6E87',
        marginHorizontal: 20

    },
    sale: {
        height: width / 2,
        width: width / 1.1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    V12: {
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        height: width / 1.4,
        borderRadius: 10,
        elevation: 5

    },
    txt7: {
        color: 'black',
        fontSize: 25,
        marginLeft: 15

    },
    txt8: {
        color: 'black',
        fontSize: 18
    },
    V13: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: width / 11,
        width: width / 4,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 6,
        backgroundColor: '#F83758',
        marginRight: 15


    },
    V14: {
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        height: width / 1,
        width: width / 1.01,
        elevation: 5

    },
    txt9: {
        color: 'black',
        fontSize: 25,
        fontWeight: '400'
    },
    off: {
        height: width / 1.2,
        width: width / 1.11

    },
})
