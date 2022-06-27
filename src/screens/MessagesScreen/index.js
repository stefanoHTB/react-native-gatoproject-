import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";



const MessagesScreen = () => {

    



    return (

<SafeAreaView>
            <ScrollView>



 
        <View >
            <Text style={{fontSize: 60, padding:30, marginTop: 30, marginLeft:80, fontWeight:'900'}}>Messages</Text>
        </View>

        
        </ScrollView>

        </SafeAreaView>
    )
}

export default MessagesScreen;