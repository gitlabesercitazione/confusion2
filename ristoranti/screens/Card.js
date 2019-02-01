import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Image,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    Picker,
    Linking 
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

// import Home from '../components/Explore/Home';
import StarRating from 'react-native-star-rating'
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DatePicker from 'react-native-datepicker'




const { height, width } = Dimensions.get('window')




class Card extends Component {
    state = {
        modalVisible: false,
        date: new Date().toISOString().split('T')[0],
        
        options : [
            {
              label: '19:30',
              value: '19:30',
              active: false
            },
            {
              label: '20:00',
              value: '20:00',
              active: false
            },
            {
                label: '19:30',
                value: '19:30',
                active: false
            }
          ]
      };

      toggleClass(ora) {
        const currentState = ora.active;
        ora.active = true;
        // this.setState({ active: !currentState });
        console.log(ora);
    };

      openMap() {
        console.log('open directions')
        // Linking.openURL('http://maps.google.com/?saddr=34.052222,-118.243611&daddr=37.322778,-122.031944');
        Linking.openURL('http://maps.google.com/?daddr=40.871849,14.274888');

        Platform.select({
            ios: () => {
                Linking.openURL('http://maps.apple.com/maps?daddr=');
            },
            android: () => {
                // Linking.openURL('http://maps.google.com/maps?daddr=');
                console.log("VAI");
                Linking.openURL('http://maps.google.com/?saddr=34.052222,-118.243611&daddr=37.322778,-122.031944');
            }
        });
    }
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        return (
       
            <View>
                    <Image source={require('../assets/pizzeriaSmorfia.jpg')}
                        style={{height: 200,width:width}} />
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Pizzeria La Smorfia
                            </Text>
                            <TouchableOpacity 
                                onPress={() => this.openMap() }
                                style={{marginLeft:20}}>
                                    <Image source={require('../assets/icons/mapsIcon.png')} style={{ fontSize: 24 }} />
                                    <Text
                                    style={{ fontSize: 13, fontWeight: "700", lineHeight: 14 }}
                                    ></Text>
                                    <Text>
                                    Via Filippo Maria Briganti 63 - 80141 Napoli (NA)
                                    </Text>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <StarRating 
                                    disable={true}
                                    maxStars={5}
                                    rating={4}
                                    fullStarColor={'gold'}
                                    starSize = {30}
                                />
                                {/* <View > */}
                                    <Image style={{width: 20 , height :30}}
                                        source={require('../assets/icons/user.png')}/>
                                        <Picker
                                            selectedValue={this.state.language}
                                            style={{ height: 30, width: 100 }}
                                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                            <Picker.Item label="1" value="1" />
                                            <Picker.Item label="2" value="2" />
                                            <Picker.Item label="3" value="3" />
                                            <Picker.Item label="4" value="4" />
                                            <Picker.Item label="5" value="5" />
                                            <Picker.Item label="6" value="6" />
                                            <Picker.Item label="7" value="7" />
                                            <Picker.Item label="8" value="8" />
                                            <Picker.Item label="9" value="9" />
                                            <Picker.Item label="10" value="10" />
                                            <Picker.Item label="11" value="11" />
                                            <Picker.Item label="12" value="12" />
                                            <Picker.Item label="13" value="13" />
                                        </Picker>
                                {/* </View> */}
                            </View>
                            <View style={{paddingHorizontal:20 , marginTop:20}}>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Seleziona data"
                                    format="DD-MM-YYYY"
                                    confirmBtnText="Conferma"
                                    cancelBtnText="Annulla"
                                    customStyles={{
                                        dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                        },
                                        dateInput: {
                                        marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                    />
                            </View> 
                            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20,width: width }}>
                            <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    style={{marginHorizontal : 10,width: width,flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal : 15,marginRight: 50}}
                                >
                                
                                {this.state.options.map((ora,index) =>
                                    (
                                        <TouchableHighlight>
                                            <Text key={index} style={ora.active ? styles.blackTimesButton :styles.timesButton}
                                                onPress={this.toggleClass(ora)}>{ora.label}
                                            </Text>
                                        </TouchableHighlight>
                                            )
                                    )}
                                  {/* <Button title="21:30" style={{marginRight : 10, paddingHorizontal : 15}}
                                          color="#e41b17"></Button>
                                          <Button title="22:00" style={{marginRight : 10, paddingHorizontal : 15}}
                                          color="#e41b17"></Button>
                                          <Button title="22:30" style={{marginRight : 10, paddingHorizontal : 15}}
                                          color="#e41b17"></Button> */}
                                    
                                    {/* <Category imageUri={require('../assets/restaurant.jpg')} */}
                                        {/* name="Ristorante etnico" */}
                                    {/* /> */}
                            </ScrollView>
                            </View>
                            <View style={{marginTop: 30}}>
                                <Button
                                    title="Prenota"
                                    color="#e41b17"
                                    accessibilityLabel="Learn more about this purple button"
                                />
                            </View>
                        </View>
        );
    }
}
export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timesButton: {
        marginRight:20,
        paddingHorizontal : 15,
        backgroundColor: "#e41b17",
        color:"white",
        borderBottomWidth: 0.5,
        borderRadius:30,
        height: 35,
        textAlignVertical:"center"
    },
    blackTimesButton : {
        backgroundColor : "black"
    }
});



