import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigation = useNavigation();



    const gotoRegister = () => {
      navigation.navigate('Register');
    };





//check internal app storage when logged out

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









    const {login} = useContext(AuthContext);
    return (

        <SafeAreaView>
            <ScrollView>


            <View style={{backgroundColor:'#4E5254'}}>

            <View style={{alignItems:'center'}}>
            <Image source={ require('../../assets/images/bmw.png')} style={{height:40, width:30, padding:100, marginTop: 100}} />
            </View>

              <View style={{marginTop: 50, padding: 20}}>

                
              

              <TextInput placeholder="  Type your Email ..."
             style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 50}} 
             value={email}
             onChangeText={text => setEmail(text)}
             />

            <TextInput placeholder="  Type your Password ..." style={{backgroundColor: '#ccc', borderRadius: 50, marginTop:10, }}
             secureTextEntry={true}
             value={password}
             onChangeText={text => setPassword(text)}
             />

              <Text style={{fontSize: 15, padding:30, marginTop: 5, marginLeft:80, fontWeight:'300', color:'white'}}>    Forgot Password?</Text>

            </View>
            </View>

        <View style={{marginTop: 1, padding: 20, backgroundColor:'#ccc'}}>
       

            <TouchableOpacity 
            onPress={() => {login(email, password)}}
            style={{marginTop: 20, height: 60, borderRadius: 50, backgroundColor:'white'}}>
                <Text style={{fontWeight:'400', textAlign:'center', padding:20, color:'black'}}>START</Text>
            </TouchableOpacity>


            <View style={{flexDirection:'row', marginTop:10}}>
              <Text style={{marginTop: 10, fontWeight:'bold', marginLeft: 55}}>  Don't have an account?</Text>
            <TouchableOpacity 
            onPress={() => {gotoRegister()}}
            style={{marginTop: 1, height: 40, borderRadius: 10, width: 100, borderEndColor:'#1692D0'}}>
                <Text style={{fontWeight:'400', padding:10, color:'#1692D0'}}>Sign up now</Text>
            </TouchableOpacity>
            </View>


            <TouchableOpacity 
            onPress={() => {logCurrentStorage()}}
            style={{marginTop: 70, backgroundColor:'#1692D0', height: 40, borderRadius: 60,}}>
                <Text style={{fontWeight:'200', textAlign:'center', padding:10, color:'white'}}>CHECK STORAGE</Text>
            </TouchableOpacity>


            

        </View>

        </ScrollView>

        </SafeAreaView>

    )
}

export default LoginScreen;