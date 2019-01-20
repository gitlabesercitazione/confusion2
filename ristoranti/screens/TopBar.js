import React from 'react';
import { createDrawerNavigator} from 'react-navigation';
import Main_Screen from './Main_Screen';
import Settings_Screen from './Settings_Screen';

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
            // initialRouteName : Home,
            drawerWidth: 250,
            drawerPosition: "left",
            leftDrawerWidth: 40
            };
        
        let routeConfigs = {
            Home: {
                screen: Main_Screen,
                style: {
                leftDrawerWidth: 40,
                }
            },
            Profile: {
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


