import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react';
import Style from './Style';
import { SharedElement } from 'react-navigation-shared-element';
import assets from '../../Components/Assets/assets';
import TabBar from './Components/TabBar';

const Sservice = () => {
    const [popUp, setpopUp] = useState(false)
    const [serviceType,setServiceType]=useState('')
    const handleSumbit = (type) => {
        setpopUp(true)
        setServiceType(type)
    }

    return (
        <View style={Style.homeConatiner}>
            <View style={[Style.menuTOP, { backgroundColor: "black" }]}>
                <SharedElement style={[Style.menuTOP]} id='service'>
                    <Image source={assets.IMAGES.ServiceIcon} />
                </SharedElement>
            </View>
            <View style={Style.menuBottom}>
                {
                    popUp ? <View style={[Style.serviceItem, { position: "absolute", bottom: "53%", zIndex: 1, left: "6%", height: 180, flexDirection: "column", backgroundColor: "lightgreen" }]}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 500 }}>Are You Sure you want "{serviceType}"</Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
                            <View>
                                <Button title='cancel' onPress={()=>setpopUp(false)} />
                            </View>
                            <View>
                                <Button title='confrom' />
                            </View>
                        </View>
                    </View> : ''
                }
                <Image source={assets.IMAGES.serviceBg} style={{ position: "absolute", bottom: 0 }} />
                <View style={[Style.menuList, { height: "100%", alignItems: "center", marginTop: 20 ,opacity:0.2}]}>
                    <TouchableOpacity style={Style.serviceItem} activeOpacity={0.8} onPress={() => handleSumbit('Cleaning')}>
                        <Image source={assets.IMAGES.cleaning} />
                        <Text style={{ fontSize: 30, fontWeight: 500 }}> Room Cleaning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.serviceItem} activeOpacity={0.8} onPress={() => handleSumbit('Laundry')}>
                        <Image source={assets.IMAGES.laundry} />
                        <Text style={{ fontSize: 30, fontWeight: 500 }}>Laundry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.serviceItem} activeOpacity={0.8} onPress={() => handleSumbit('Maintenance')}>
                        <Image source={assets.IMAGES.maintenance} />
                        <Text style={{ fontSize: 30, fontWeight: 500 }}>Maintenance</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Sservice