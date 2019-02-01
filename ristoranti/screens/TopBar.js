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
    Button,
    SectionList
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
        <SectionList
          sections={[
            {title: '', data: ['']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </ScrollView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })