import React, { Component } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const FirstContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default class First extends Component {
  state = {};
  render() {
    return (
      <FirstContainer>
        <Text>First</Text>
      </FirstContainer>
    );
  }
}
