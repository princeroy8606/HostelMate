import { View, Text, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Style from './Style';
import assets from '../../Components/Assets/assets';
import { SharedElement } from 'react-navigation-shared-element';
import styles from '../Auth/Style';


const SMenu = () => {
    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    const selectedDate = (date) => {
        if (index === date - 1)
            return {
                backgroundColor: "red",
                borderRadius: 100,
                shadowColor: "black",
                elevation: 10,
                color:"white"
            }
    }
    const Date = ({ date }) => (
        <View style={[selectedDate(date), { width: 60, height: "100%", marginHorizontal: 7.5, }]}>
            <TouchableOpacity onPress={() => setIndex(date - 1)} style={{ alignSelf: "center", padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>{date}</ Text>
            </TouchableOpacity>
        </View>
    )

    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5
        })
    }, [index])


    return (
        <View style={[Style.homeConatiner]}>
            <StatusBar />
            <SharedElement style={[Style.menuTOP, { backgroundColor: "black" }]} id='image'>
                <Image source={assets.IMAGES.MenuIcon} />
            </SharedElement>
            <View style={Style.menuBottom}>
                <View style={Style.dateContainer}>
                    <FlatList style={Style.dateList}
                        horizontal
                        ref={ref}
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={0}
                        contentContainerStyle={{
                            justifyContent: "space-around", flexDirection: "row", justifyContent: "center",
                            alignItems: "center",
                        }}
                        data={dates}
                        renderItem={({ item }) => <Date date={item} />}
                    />
                </View>
                <View style={Style.menuList}>
                    <FlatList style={[Style.menuList,{height:"100%"}]}
                    contentContainerStyle={{justifyContent:"space-around",alignItems:"center",marginTop:16}}
                    data={dates}
                    renderItem={({item})=> (
                            <View style={{width:270,height:60,justifyContent:"space-around",}} key={item}>
                                <Text style={{backgroundColor:"cyan",}}>{item}</Text>
                            </View>
                        )
                    }
                    />
                </View>
            </View>
        </View>
    )
}

export default SMenu