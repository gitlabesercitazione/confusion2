import React from 'react';
import { createDrawerNavigator,DrawerItems} from 'react-navigation';
import MainNavigator from './Main_Screen';
import Settings_Screen from './Settings_Screen';
import {Avatar} from './../components';
import {LogoProfile} from './LogoProfile';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Button
  } from 'react-native';

 

export default class TopBar extends React.Component {
    constructor(props) {
    
        super(props);
        this.state = {drawerOpen: null};
        console.log("==========DRAWER=========================");
        // console.log(this.props.navigate('DrawerOpen'));
        // bootstrap();
      }
    render() {
  
        let drawerNavigatorConfig = {
            // // initialRouteName : Main_Screen,
            contentComponent : CustomDrawerComponent,
            drawerWidth: 250,
            drawerPosition: "left",
            leftDrawerWidth: 40,
            };
        
        let routeConfigs = {
            Esplora: {
                screen: MainNavigator,
                style: {
                leftDrawerWidth: 40,
                }
            },
            Profilo: {
                screen: Settings_Screen,
                style: {
                leftDrawerWidth: 40,
                }
            }
        };
    
        const Toolbar = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
        return(
  
               
            <Toolbar/>
        )
    }
}



const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor: 'white'}}>
        <Image source={ require ("../assets/images/nappetito.jpg")} style={{height: 150 , width : 250 }}></Image>
    </View>
    <ScrollView>
        <DrawerItems {...props}/>
    </ScrollView>
    </SafeAreaView>
)