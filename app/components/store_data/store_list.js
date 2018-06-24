import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import StoreItem from "./store_item";

const ListContainer = styled.View`
  background-color: #c1bacf;
  width: 80%;
  height: 200px;
`;

class StoreList extends Component {
  state = {};
  render() {
    const { storeRecommendedChatbots } = this.props.list;

    return (
      <ListContainer>
        <FlatList
          ListHeaderComponent={<Text>스토어 리스트</Text>}
          data={storeRecommendedChatbots.edges}
          keyExtractor={({ node }) => node.id}
          renderItem={({ item }) => <StoreItem data={item} />}
        />
      </ListContainer>
    );
  }
}

export default createFragmentContainer(
  StoreList,
  graphql`
    fragment storeList_list on RootQuery {
      storeRecommendedChatbots(first: $storeCount)
        @connection(key: "keyList_storeRecommendedChatbots") {
        edges {
          node {
            id
            active
            chatbot {
              id
              name
            }
          }
        }
      }
    }
  `
);
