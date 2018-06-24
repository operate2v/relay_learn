import React, { Component } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";
import { routes } from "../../constants";

const ItemContainer = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  flex-direction: row;
`;

class StoreItem extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <ItemContainer
        onPress={() =>
          this.props.navigation.navigate(routes.storeDetail, {
            storeId: data.node.id
          })
        }
      >
        <Text>{data.node.chatbot.name}</Text>
        <Text>{data.node.active ? "true" : "false"}</Text>
      </ItemContainer>
    );
  }
}

export default withNavigation(StoreItem);
