import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default class Home extends Component {
  state = {  }
  render() {
    return (
      <HomeContainer>
        <Text>Home</Text>
      </HomeContainer>
    );
  }
}