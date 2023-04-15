import { View, Text, Image, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Style from './Style';
import assets from '../../Components/Assets/assets';
import Octicons from 'react-native-vector-icons/Octicons';
import { SharedElement } from 'react-navigation-shared-element';

let day = new Date().toDateString().split(' ').at(2)

const SMenu = () => {
    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const list = [1, 2, 3, 4, 5,]
    const [color, setColor] = useState("Black")
    const ref = useRef(null)
    const [index, setIndex] = useState(0)
    const selectedDate = (date) => {
        if (index === date - 1)
            return {
                backgroundColor: "red",
                borderRadius: 100,
                shadowColor: "black",
                elevation: 10,
                color: "white"
            }
    }
    const Date = ({ date }) => (
        <View style={[selectedDate(date), { width: 60, height: "100%", marginHorizontal: 7.5, }]}>
            <TouchableOpacity onPress={() => handleDate(date)} style={{ alignSelf: "center", padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>{date}</ Text>
            </TouchableOpacity>
        </View>
    )
    const setRaiting = (item) => {
        console.log(item)
        if (index < item - 1)
            setColor("yellow")
    }
    const handleDate = (date) => {
        index === 0 ?
            setIndex(parseInt(day - 1)) : setIndex(date - 1)
    }
    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.5,
        })
    }, [index])

    return (
        <View style={[Style.homeConatiner]}>
            <StatusBar />
            <View style={[Style.menuTOP, { backgroundColor: "black" }]}>
                <SharedElement style={[Style.menuTOP]} id='image'>
                    <Image source={assets.IMAGES.MenuIcon} />
                </SharedElement>
            </View>
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
                    <FlatList style={[Style.menuList, { height: "100%" }]}
                        contentContainerStyle={{ justifyContent: "space-around", alignItems: "center", marginTop: 16 }}
                        data={dates}
                        renderItem={({ item }) => (
                            <View key={item}
                                style={{
                                    width: 370, height: 170, backgroundColor: '#6CD348', marginBottom: 35, borderRadius: 40, alignItems: "center", justifyContent: "center", shadowColor: "black",
                                    elevation: 20,
                                }} >
                                <Text style={{ fontSize: 30 }}>Sunday</Text>
                                <Text style={{ fontSize: 20 }}>Dosa with No kadala char</Text>
                                <View style={{ flexDirection: "row", width: "50%", justifyContent: "space-around" }}>
                                    {
                                        list.map((item) => (
                                            <TouchableOpacity key={item} onPress={() => setRaiting(item)} style={{ padding: 10 }}>
                                                <Octicons name='star-fill' color={item - 1 <= index ? "yellow" : "black"} size={18} />
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>
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