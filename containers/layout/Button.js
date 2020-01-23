import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, textC, buttonC }) => {
  const { buttonStyle, textStyle } = styles;
  
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, buttonC]}>
      <Text style={[textStyle, textC]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#ff5757",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ff5757",
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };