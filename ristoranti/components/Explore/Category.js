import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 280, width: 200, marginLeft: 10 }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: 200, height: 250, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});