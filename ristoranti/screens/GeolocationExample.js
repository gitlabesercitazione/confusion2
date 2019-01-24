import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
export default class GeolocationExample extends Component {
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
console.log( JSON.stringify(this.state.location));

  let saluto = "ciao";

  console.log("si spera la citta : " + place  + " e " + this.state.city);
    return (
        <Text style={styles.paragraph}>{place} {this.state.city}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});