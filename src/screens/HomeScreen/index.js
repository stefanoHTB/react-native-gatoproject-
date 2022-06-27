import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import DrawerNavigator from "../../navigation/DrawerNavigator";



const HomeScreen = () => {

    const {logout} = useContext(AuthContext);

    const navigation = useNavigation();



    const openDrawer = () => {
      navigation.navigate();

    };







///check internal app storage when logged in

     function logCurrentStorage() {
        AsyncStorage.getAllKeys().then((keyArray) => {
          AsyncStorage.multiGet(keyArray).then((keyValArray) => {
            let myStorage = {};
            for (let keyVal of keyValArray) {
              myStorage[keyVal[0]] = keyVal[1]
            }
      
            console.log('CURRENT STORAGE: ', myStorage);
          })
        });
      }

    return (

<SafeAreaView>
            <ScrollView>
<View style={{backgroundColor:'#4E5254'}}>
              <View style={{alignItems:'center',
               flexDirection:'row',
                justifyContent:'space-between',
                 padding: 10,
                 backgroundColor:'#2A2D2F'}}>
                <TouchableOpacity onPress={()=> {openDrawer()}}>
                <Image source={ require('../../assets/images/basura.png')} 
                style={{width:53, height:53, borderRadius: 10, }} />
                </TouchableOpacity>
                
                <Image source={ require('../../assets/images/smile.png')} 
                style={{width:55, height:55}}/>

               <Image source={ require('../../assets/images/camara.png')} 
                style={{width:50, height:50}}/> 
              </View>



 
        <View >
            <Text style={{fontSize: 60, padding:30, marginTop: 30, marginLeft:80, fontWeight:'400'}}>Home</Text>
        </View>

        <View style={{marginTop: 300, padding: 20}}>
            

            <TouchableOpacity 
            onPress={() => {logCurrentStorage()}}
            style={{marginTop: 20, backgroundColor:'#1692D0', height: 40, borderRadius: 40}}>
                <Text style={{fontWeight:'400', textAlign:'center', padding:10, color:'white'}}>CHECK STORAGE</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => {logout()}}
            style={{marginTop: 20, backgroundColor:'#1692D0', height: 40, borderRadius: 40}}>
                <Text style={{fontWeight:'400', textAlign:'center', padding:10, color:'white'}}>LOGOUT</Text>
            </TouchableOpacity>

        </View>
</View>

        </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;