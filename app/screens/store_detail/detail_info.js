import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import { SafeAreaView, Text, Button } from "react-native";
import styled from "styled-components/native";

const DetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

class DetailInfo extends Component {
  state = {};
  render() {
    const { node } = this.props.detail;

    return (
      <DetailContainer>
        <Text>{node.chatbot.name}</Text>
        <Text>active: {node.active ? "true" : "false"}</Text>
        <Button title="sibal" onPress={() => console.log("sial")} />
      </DetailContainer>
    );
  }
}

export default createFragmentContainer(
  DetailInfo,
  graphql`
    fragment detailInfo_detail on RootQuery {
      node(id: $storeId) {
        ... on StoreChatbot @connection(key: "keyDetail_detailStore") {
          id
          active
          averageRating
          chatbot {
            id
            name
          }
        }
      }
    }
  `
);
