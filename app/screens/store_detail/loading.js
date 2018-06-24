import React, { Component } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const LoadingView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default class Loading extends Component {
  state = {};
  render() {
    return (
      <LoadingView>
        <Text>Loading ...</Text>
      </LoadingView>
    );
  }
}
