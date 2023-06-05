import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Zocial } from '@expo/vector-icons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign } from '@expo/vector-icons';


const SocialMediaButtons = () => {
  return (
    <View style={styles.parentView}>
      <FontAwesome
        name="facebook-square"
        style={styles.button}
        size={24}
        color="#3b5998"
        backgroundColor="#3b5998"
      />

      <Zocial
        style={styles.button}
        name="gmail"
        size={24}
        color="#F13B36"
      />

      <AntDesign style={styles.button} name="apple1" size={24} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: "30%",
    marginHorizontal: 10
  },
  parentView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  }
});

export default SocialMediaButtons;
