import React from 'react'
import {DrawerItems} from 'react-navigation'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    SafeAreaView,Image
  } from 'react-native';


export default class LogoProfile extends React.Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <View style={{height:150, backgroundColor: 'white'}}>
                <Image source={ require ("../assets/images/61W6CIKlIcL._SX425_.jpg")} style={{height: 120 , width : 120 , borderRadius: 60}}></Image>
            </View>
             <ScrollView>
                <DrawerItems {...props}/> 
            </ScrollView> 
            </SafeAreaView>
        )
    }
}
