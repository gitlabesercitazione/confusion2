import { Toolbar } from 'react-native-material-ui';
import React, { Component } from 'react';
import TopBar from './TopBar'
import { createDrawerNavigator} from 'react-navigation';
import { Platform, Text, View, StyleSheet } from 'react-native';

import { Constants, Location, Permissions } from 'expo';
class MenuTopbar extends TopBar {

    constructor(props) {
        super(props);
        this.state = {index: 0};
      }

      state = {
        location: null,
        errorMessage: null,
        city : ""
      };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  




    //   onClickRightElement = () => {
    //     // const {navigate} = this.props.navigations;
    //     console.log(this.props.navigations);
    //     // navigate('DrawerOpen');
    // }
    
      
render() {
    let text = 'Waiting..';
    var place = '' ;
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      console.log( "INDIRIZZO REST : "+ "https://eu1.locationiq.com/v1/reverse.php?key=62c39cf0e90ae4&lat=40.9121654&lon=14.3462793&format=json");
    fetch("https://eu1.locationiq.com/v1/reverse.php?key=62c39cf0e90ae4&lat=40.9121654&lon=14.3462793&format=json", {
      method: 'GET'
   }).then((response) => response.json())
      .then((responseJson) => {
         place = responseJson.address.city;
         this.setState({
          city: responseJson.address.city ? responseJson.address.city : "",
        });
         console.log("si spera la citta : " + place);
         console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
      })
    }
console.log( JSON.stringify(this.state.city));

  let saluto = "ciao";

    return(
      <Toolbar
        leftElement="menu"
        centerElement={this.state.city}
        onLeftElementPress = {this.props.drawerOpen}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          titleText : {color: "#e41b17"}
        }}
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        style={{
            container: { backgroundColor: "#e41b17",height: 70,paddingTop:20},
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