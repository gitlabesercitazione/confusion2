import { Toolbar } from 'react-native-material-ui';
import React, { Component } from 'react';
import TopBar from './TopBar'
import { createDrawerNavigator} from 'react-navigation';
import { Platform, Text, View, StyleSheet,Dimensions } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Constants, Location, Permissions } from 'expo';
const { height, width } = Dimensions.get('window')

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
      text = JSON.stringify(this.state.location.coords);
    fetch("https://eu1.locationiq.com/v1/reverse.php?key=62c39cf0e90ae4&lat="+this.state.location.coords.latitude+"&lon="+this.state.location.coords.longitude+"&format=json", {
      method: 'GET'
   }).then((response) => response.json())
      .then((responseJson) => {
         place = responseJson.address.state;
         this.setState({
          city: responseJson.address.state ? responseJson.address.state : "",
        });
      })
    }

  let saluto = "ciao";

    return(
      <Toolbar
        leftElement="menu"
        centerElement={(
          <GooglePlacesAutocomplete
            placeholder='Enter Location'
            minLength={2}
            listViewDisplayed='false' 
            autoFocus={false}
            returnKeyType={'default'}
            fetchDetails={true}
            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: 'AIzaSyA2xY_yzEBdV3fmq-22JayOq7k4Nzs_rE8',
              language: 'it', // language of the results
              types: '(cities)' // default: 'geocode'
            }}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth:0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
              description: {
                fontWeight: 'bold',
               },
               listView: {
                flex: 1,
                position: 'absolute',
                top: 40,
                zIndex:100,
                backgroundColor: 'white',
                marginHorizontal: 5,
                width: width,
                minHeight: 500
            },
            row: {
                height: 40
            },
            poweredContainer: {
                display: 'none'
            },
            powered: {
                display: 'none'
            }
          }}
            currentLocation={false}
          />
          // <GooglePlacesAutocomplete
          //                               placeholder='Enter Location'
          //                               minLength={1}
          //                               autoFocus={false}
          //                               returnKeyType={'search'}
          //                               onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          //                                   console.log(data, details);
          //                               }}
          //                               listViewDisplayed={true}
          //                               getDefaultValue={() => 'New York'}
          //                               query={{
          //                                   // available options: https://developers.google.com/places/web-service/autocomplete
          //                                   key: 'AIzaSyA2xY_yzEBdV3fmq-22JayOq7k4Nzs_rE8',
          //                                   language: 'en', // language of the results
          //                                    // default: 'geocode'
          //                               }}
          //                               nearbyPlacesAPI='GooglePlacesSearch'
          //                               GooglePlacesSearchQuery={{
          //                                   // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          //                                   rankby: 'distance',
          //                                   types: 'food'
          //                               }}
          //                               styles={{
          //                                   container: {
          //                                       zIndex: 9999,
          //                                       position: 'absolute',
          //                                       width: '100%'
          //                                   },
          //                                   textInputContainer: {
          //                                       backgroundColor: 'rgba(0,0,0,0)',
          //                                       borderTopWidth: 0,
          //                                       borderBottomWidth: 0,
          //                                       height: 200,
          //                                   },
          //                                   textInput: {
          //                                       marginLeft: 5,
          //                                       marginRight: 5,
          //                                       color: '#5d5d5d',
          //                                       fontSize: 12,
          //                                       height: 30,
          //                                   },
          //                                   predefinedPlacesDescription: {
          //                                       color: '#1faadb'
          //                                   },
          //                                   listView: {
          //                                       flex: 1,
          //                                       position: 'absolute',
          //                                       top: 40,
          //                                       backgroundColor: 'red',
          //                                       marginHorizontal: 5,
          //                                       width: width,
          //                                       minHeight: 160
          //                                   },
          //                                   row: {
          //                                       height: 40
          //                                   },
          //                                   poweredContainer: {
          //                                       display: 'none'
          //                                   },
          //                                   powered: {
          //                                       display: 'none'
          //                                   }
          //                               }}
          //                           />
        )}
        onLeftElementPress = {this.props.drawerOpen}
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          titleText : {color: "black"}
        }}
        style={{
            container: { backgroundColor: "#e41b17",height: 70,paddingTop:20},
            leftElement: { color: "white" },
            titleText: { color: "black" },
            rightElement: { color: "white" },
            marginTop: 20
        }}
        onRightElementPress={ (label) => { console.log("ciao") }}
      />
      )
    }
}
export default MenuTopbar;