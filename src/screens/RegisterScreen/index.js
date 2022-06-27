import React, {useContext, useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import { AuthContext }from '../../context/AuthContext';



const RegisterScreen = () => {

    const [email, setEmail] = useState(null);
    const [user_name, setUsername] = useState(null);
    const [first_name, setName] = useState(null);
    const [last_name, setLastname] = useState(null);
    const [password, setPassword] = useState(null);

    const navigation = useNavigation();




    const gotoLogin = () => {
        navigation.navigate('Login');
      };


    const {Register} = useContext(AuthContext);






    return (

        <SafeAreaView >
            <ScrollView  >
    <View style={{backgroundColor:'#4E5254', marginTop:-5}}>

           <View style={{alignItems:'center', padding: 25}}>
            <Image source={ require('../../assets/images/bmw.png')} style={{height:10, width:10, padding:70,  marginTop: 1, alignContent:'center'}} />

        </View>


        <View style={{alignItems:'center', marginTop:-30}}>
        <Text style={{fontSize: 50, padding:20, fontWeight:'200', color:'white',  }}>Welcome Home...!</Text>
        <Text style={{fontSize: 20,  fontWeight:'200', color:'white' }}>Are you ready to begin your dream?</Text>

        </View>

        

        <View style={{ padding: 20}}>
            <TextInput placeholder="  Type your Email ..."
             style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 50, marginTop:10}} 
             value={email}
             onChangeText={text => setEmail(text)}
             />

            <TextInput placeholder="  Type your Username ..."
             style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 50, marginTop:10}} 
             value={user_name}
             onChangeText={text => setUsername(text)}
             />

             <TextInput placeholder="  Type your First Name ..."
             style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 50, marginTop:10}} 
             value={first_name}
             onChangeText={text => setName(text)}
             />

             <TextInput placeholder="  Type your last Name ..."
             style={{backgroundColor: '#ccc', marginBottom: 10, borderRadius: 50, marginTop:10}} 
             value={last_name}
             onChangeText={text => setLastname(text)}
             />
             

            <TextInput placeholder="  Type your Password ..." style={{backgroundColor: '#ccc', borderRadius: 50, marginTop:10 }}
             secureTextEntry={true}
             value={password}
             onChangeText={text => setPassword(text)}
             />

            <TouchableOpacity 
            onPress={() => {Register(email, password, last_name, first_name, user_name)}}
            style={{marginTop: 57, backgroundColor:'#1692D0', height: 50, borderRadius: 40, }}>
                <Text style={{fontWeight:'400', textAlign:'center', padding:15, color:'white'}}>Register</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row'}}>
              <Text style={{marginTop: 10, fontWeight:'400'}}>  Already have an account?</Text>
            <TouchableOpacity 
            onPress={() => {gotoLogin()}}
            style={{marginTop: 1, height: 40, borderRadius: 10, width: 100}}>
                <Text style={{fontWeight:'400', padding:10, color:'#1692D0', }}>Log in now </Text>
            </TouchableOpacity>
            </View>

        

        

        </View>
    </View>

        </ScrollView>

        </SafeAreaView>

    )
}

export default RegisterScreen;