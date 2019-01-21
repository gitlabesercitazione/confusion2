import { Toolbar } from 'react-native-material-ui';
import React, { Component } from 'react';
import TopBar from './TopBar'
import { createDrawerNavigator} from 'react-navigation';


class MenuTopbar extends TopBar {

    constructor(props) {
        super(props);
        this.state = {index: 0};
      }

    //   onClickRightElement = () => {
    //     // const {navigate} = this.props.navigations;
    //     console.log(this.props.navigations);
    //     // navigate('DrawerOpen');
    // }
    
      
render() {
    return(
      <Toolbar
        leftElement="menu"
        centerElement="Nappetito"
        onLeftElementPress = {this.props.drawerOpen}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          titleText : {color: "red"}
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        style={{
            container: { backgroundColor: "red",height: 70,paddingTop:20},
            leftElement: { color: "white" },
            titleText: { color: "white" },
            rightElement: { color: "white" },
            
            marginTop: 20
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
      )
    }
}
export default MenuTopbar;