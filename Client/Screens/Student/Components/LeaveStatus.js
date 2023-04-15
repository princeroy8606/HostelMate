import { View, Text, FlatList ,TouchableOpacity,Image} from 'react-native'
import React from 'react';
import Style from '../Style';
import assets from '../../../Components/Assets/assets';

const LeaveStatus = () => {
    return (
        <View style={Style.OPbottom}>
            <View style={{ width: "100%", height: "100%" ,padding:20}}>
                {/* <FlatList style={{ width: "100%", height: "100%",backgroundColor:"yellow"}}> */}
                    <TouchableOpacity style={Style.serviceItem}>
                        <Text style={{ fontSize: 30 }}>Sunday</Text>
                        <Text style={{ fontSize: 20 }}>Dosa with No kadala char</Text>
                    </TouchableOpacity>
                {/* </FlatList> */}
            </View>
        </View>
    )
}

export default LeaveStatus