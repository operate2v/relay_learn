import React, { Component } from "react";
import { Text, AsyncStorage } from "react-native";
import { uri, routes } from "../../constants";
import styled from 'styled-components/native';

const LoadingContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default class Loading extends Component {
  state = {
    email: "operate@naver.com",
    password: "qpqpqp12"
  };

  componentDidMount = () => {
    this.loginNow();
  };

  loginNow = async () => {
    fetch(uri.SigninUri, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(({ accessToken, refreshToken, error }) => {
        accessToken
          ? this.completeLogin(accessToken, refreshToken)
          : this.failLogin(error);
      })
      .catch(error => {
        console.log(error);
      });
  };

  completeLogin = (accessToken, refreshToken) => {
    AsyncStorage.setItem("@AccessToken:key", accessToken);
    AsyncStorage.setItem("@RefreshToken:key", refreshToken);
    this.props.navigation.navigate(routes.mainStack);
  };

  failLogin = error => {
    this.props.navigation.navigate(routes.failStack, { error: error });
  };

  render() {
    return (
      <LoadingContainer>
        <Text>Loading</Text>
      </LoadingContainer>
    );
  }
}
