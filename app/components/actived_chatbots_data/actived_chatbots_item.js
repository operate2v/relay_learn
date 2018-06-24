import React, { Component } from 'react';
import { Text } from "react-native";
import styled from "styled-components/native";

const ItemContainer = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin: 5px;
`;

export default class ActivedChatbotsItem extends Component {
  state = {};
  render() {
    return (
      <ItemContainer>
        <Text>{this.props.children}</Text>
      </ItemContainer>
    );
  }
}
