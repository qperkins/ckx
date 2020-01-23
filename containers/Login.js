import React, { Component } from "react";
import { View, Image, Text, KeyboardAvoidingView } from "react-native";
import { Card, CardSection, Input, Button, Red } from "./layout";
import { Icon } from "native-base"

export class Login extends Component {
  renderButton() {
    /*  if (this.props.loading) {
      return <Spinner size="large" />;
    } */

    return (
      <View>
        <View style={{ height: 50, paddingTop: 10 }}>
          <Button>Login</Button>
        </View>
        <View style={{ height: 50, paddingTop: 10, marginBottom: 4 }}>
          
            <Button textC={{color: "#ff5757"}} buttonC={{backgroundColor: "#fff"}}>Sign Up</Button>
         
        </View>
        <View style={{alignSelf:"center",paddingTop: 20}}><Text>  ──────   OR   ──────  </Text></View>
        <View style={{ flexDirection:"row", alignSelf:"center", paddingTop: 15}} >
            <Icon name="twitter" type="Entypo" style={Red} /> 
            <Icon name="facebook" type="Entypo" style={[{paddingLeft:20, paddingRight:20}, Red]} />
            <Icon name="google" type="AntDesign" style={Red} />
        </View>
      </View>
    );
  }
  render() {
    return (
      <KeyboardAvoidingView
        style={{ backgroundColor: "#fff", flex: 1, justifyContent: "center" }}
      >
        <Image
          style={{
            height: 150,
            width: 320,
            alignSelf: "center"
          }}
          source={require("../assets/logo.png")}
        />
        <Card>
          <CardSection>
            <Input
              name="mail"
              type="AntDesign"
              placeholder="email@gmail.com"
              // onChangeText={this.onEmailChange.bind(this)}
              // value={this.props.email}
            />
          </CardSection>
          {/* this.renderError() */}
          <CardSection>
            <Input
              // onChangeText={this.onPasswordChange.bind(this)}
              name="lock"
              type="AntDesign"
              secureTextEntry
              label="Password"
              placeholder="password"
              //  value={this.props.password}
            />
          </CardSection>

        
          {this.renderButton()}
        </Card>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default Login;
