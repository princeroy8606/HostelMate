
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Style from './Style';
import assets from '../../Components/Assets/assets';
import LeaveStatus from './Components/LeaveStatus';
const Sleave = () => {

    const [leaveStatus, setLeaveStatus] = useState(false)
    const handleStatus = () => {
        setLeaveStatus(!leaveStatus)
    }
    return (
        <View style={Style.homeConatiner}>
            <View style={[Style.menuTOP, { backgroundColor: "#211234" }]}>
                <View style={{ width: "100%", height: "25%", flexDirection: "row", justifyContent: "flex-end", paddingRight: 10 }}>
                    <TouchableOpacity style={Style.history} activeOpacity={0.8} onPress={handleStatus}>
                        <Text style={{ color: "#211234" }}>{leaveStatus ? 'New Leave' : 'Leave-Status'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 500, color: "white" }}>{leaveStatus ? 'LEAVE_STATUS' : 'LEAVE'}</Text>
                </View>
            </View>
            {
                leaveStatus ? (<LeaveStatus />) :
                    (
                        <View style={Style.OPbottom}>
                            <View style={[Style.OPreasonContainer, { height: "30%" }]}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 500 }}>Reason:</Text>
                                    <TextInput style={[Style.complaintContent, { height: "90%", backgroundColor: "#D9D9D9" }]}
                                        multiline textAlignVertical='top' />
                                </View>
                            </View>
                            <View style={[Style.OPreasonContainer,]}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 500 }}>Date:</Text>
                                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                                        <View style={{ width: "60%", height: 100, justifyContent: "space-around" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text>From :</Text>
                                                <TextInput style={Style.shortInput} placeholder='DD/MM/YY' />
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                                <Text>To     :</Text>
                                                <TextInput style={Style.shortInput} placeholder='DD/MM/YY' />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 500 }}>Time:</Text>
                                    <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
                                        <View style={{ width: "60%", height: 100, justifyContent: "space-around" }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                                                <Text>From :</Text>
                                                <TextInput style={Style.shortInput} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ justifyContent: "flex-end", flexDirection: "row", marginTop: 60 }}>
                                    <TouchableOpacity style={[Style.requestBtn]}>
                                        <Text style={{ fontSize: 20, fontWeight: 500, color: "white" }}>Request</Text>
                                        <Image source={assets.IMAGES.sendIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
            }

        </View>
    )
}

export default Sleave