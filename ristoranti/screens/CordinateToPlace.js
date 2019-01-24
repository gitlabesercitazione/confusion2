import React, { Component } from 'react';


fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + myLat + ',' + myLon + '&key=' + myApiKey)
.then((response) => response.json())
.then((responseJson) => {
   var place = responseJson;
   console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
})

class CordinateToPlace extends Component {
     state = {
        myLat : "",
        myLon : "",
        myApiKey : "",
        place : place
    }

    render() {
        return (
            <Text>
                    {this.state.place}
            </Text>
        )
    }

}


