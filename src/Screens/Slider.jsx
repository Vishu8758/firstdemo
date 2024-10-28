import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import React, { useRef, useState } from 'react';
import { height, TouchableComponent, width } from '../Utilities/Helper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const image = [
    {
        image: require('../Utilities/Images/1.png'),
        text: 'Choose Products',
        txt: 'Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia \n consequat duis enim velit mollit.'
    },
    {
        image: require('../Utilities/Images/2.png'),
        text: 'Make Payment',
        txt: 'Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia \n consequat duis enim velit mollit.'
    },
    {
        image: require('../Utilities/Images/3.png'),
        text: 'Get Your Order',
        txt: 'Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia \n consequat duis enim velit mollit.'
    }
];

const Slider = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const swiperRef = useRef(null);


    const handleNext = () => {
        if (index < image.length - 1) {
            swiperRef.current.scrollToIndex({ index: index + 1 });
            setIndex(index + 1);
        }
    };


    const handlePrevious = () => {
        if (index > 0) {
            swiperRef.current.scrollToIndex({ index: index - 1 });
            setIndex(index - 1);
        }
    };

    const handleStart = ({ navigation }) => {
        if (index == image.length) {
            swiperRef.current.scrollToIndex({ index: index - 1 });
            setIndex(index - 1);
        }
    };


    return (
        <View style={Styles.main}>

            <View style={Styles.V2}>
            <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
                <View style={Styles.V3}>
                    <Text style={Styles.txt1}>{index + 1}</Text>
                    <Text style={Styles.txt2}>/{image.length}</Text>
                </View>
                <TouchableComponent onPress={() => navigation.navigate('Signin')}>
                    <Text style={Styles.txt3}>Skip</Text>
                </TouchableComponent>
            </View>

            <SwiperFlatList
                ref={swiperRef}
                data={image}
                paginationStyle={{ position: 'absolute', alignSelf: 'center' }}
                paginationStyleItem={{
                    width: 8,
                    height: 8,
                    borderRadius: 5,
                    backgroundColor: 'black',
                }}
                onChangeIndex={({ index }) => setIndex(index)}
                paginationStyleItemActive={{
                    backgroundColor: 'black',
                    width: width / 10,
                }}
                showPagination
                renderItem={({ item }) => (
                    <View style={Styles.V1}>
                        <Image source={item.image} style={Styles.img1} resizeMode="contain" />
                        <Text style={Styles.txt4}>{item.text}</Text>
                        <Text style={Styles.paragraphText}>{item.txt}</Text>
                    </View>
                )}
            />

            <View style={Styles.V4}>
                {index > 0 ? <TouchableComponent
                    style={Styles.touch}
                    disabled={index === 0}
                    onPress={handlePrevious}
                >
                    <Text style={Styles.txt6}>Prev</Text>
                </TouchableComponent> : <Text></Text>
                }

                {index < image.length - 1 ? <TouchableComponent
                    style={Styles.touch1}
                    disabled={index === image.length - 1}
                    onPress={handleNext}
                >
                    <Text style={Styles.txt5}>Next</Text>
                </TouchableComponent> : <TouchableComponent
                    style={Styles.touch1}
                    disabled={index === image.length - 1}
                    onPress={handleStart}
                >
                    <Text style={Styles.txt5}>Get Started</Text>
                </TouchableComponent>}
            </View>
        </View>
    );
};

export default Slider;

const Styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    V1: {
        justifyContent: 'center',
        alignItems: 'center',
        
        width: width
    },
    img1: {
        alignSelf: 'center',
        height: width / 1.1,
        width: width / 1.2,
        justifyContent: 'center'
    },
    V2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        
        alignItems: 'center',
        marginVertical:10
    },
    V3: {
        flexDirection: 'row'
    },
    txt1: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    txt2: {
        fontSize: 20
    },
    txt3: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    paragraphText: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10,
        textAlign: 'center',
        width: width / 1.2,
    },
    txt4: {
        fontSize: 23,
        fontWeight: '900',
        color: 'black'
    },
    V4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom:10,
        alignItems:'center'



    },
    txt5: {
        color: '#F83758',
        fontSize: 22,
        fontWeight: '700'

    },
    txt6: {

        fontSize: 22,
        fontWeight: '700'

    }
});
