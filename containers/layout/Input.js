import React from "react";
import { TextInput, View, Text } from "react-native";
import { Icon } from "native-base"

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  name, 
  type
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon name={name} type={type} style={labelStyle} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    paddingLeft: 5,
    fontSize: 20
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 20
  }
};

export { Input };