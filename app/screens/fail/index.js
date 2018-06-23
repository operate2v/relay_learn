import React, { Component } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const FailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default class Fail extends Component {
  state = {  }
  render() {
    return (
      <FailContainer>
        <Text>fail login</Text>
      </FailContainer>
    );
  }
}