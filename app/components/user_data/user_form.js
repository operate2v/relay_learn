import React, { Component } from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import environment from "../../../scripts/get_environment";
import { UpdateUserMutation } from "../../mutations";

const UserContainer = styled.View`
  background-color: #c1bacf;
  width: 80%;
  height: 80px;
`;
const Input = styled.TextInput`
  width: 80%;
  padding: 3px;
  margin: 3px;
`;

export default class UserForm extends Component {
  state = {
    value: ""
  };

  updateUser = () => {
    UpdateUserMutation.commit(environment, this.props.user.id, null, this.state.value, null, null);
  };

  render() {
    const { user } = this.props;

    return (
      <UserContainer>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
        <Text>{user.gender}</Text>
        <Input
          placeholder="input"
          value={this.state.value}
          onChangeText={value => this.setState({ value })}
        />
        <Button title="change" onPress={() => this.updateUser()} />
      </UserContainer>
    );
  }
}
