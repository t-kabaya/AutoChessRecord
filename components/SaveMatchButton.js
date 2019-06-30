import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { secondaryColor } from "../constants/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class saveMatchButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        {/* <View style={styles.container}> */}
        <Button mode="contained" style={styles.buttonContainer}>
          <Text style={styles.buttonText}>+</Text>
        </Button>
        {/* </View> */}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: wp("5%"),
    bottom: wp("5%"),
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: secondaryColor,
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  buttonText: {
    fontSize: 30,
  },
});
