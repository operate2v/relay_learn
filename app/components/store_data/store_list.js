import React, { Component } from "react";
import { createPaginationContainer } from "react-relay";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import StoreItem from "./store_item";

const ListContainer = styled.View`
  background-color: #c1bacf;
  width: 80%;
  height: 200px;
`;
const Footer = styled.TouchableOpacity`
  width: 100%;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: #faceae;
`;

class StoreList extends Component {
  state = {};

  loadMoreStoreList = () => {
    const { list, relay } = this.props;
    const { startCursor } = list.storeRecommendedChatbots.pageInfo;

    if (startCursor === null) return;
    if (!relay.hasMore() || relay.isLoading()) return;
    relay.loadMore(10);
  };

  footer = () => {
    return (
      <Footer onPress={() => this.loadMoreStoreList()}>
        <Text>sibal</Text>
      </Footer>
    );
  };

  header = () => {
    return <Text>스토어 리스트</Text>;
  };

  render() {
    const { storeRecommendedChatbots } = this.props.list;

    return (
      <ListContainer>
        <FlatList
          ListFooterComponent={this.footer()}
          ListHeaderComponent={this.header()}
          data={storeRecommendedChatbots.edges}
          keyExtractor={({ node }) => node.id}
          renderItem={({ item }) => <StoreItem data={item} />}
        />
      </ListContainer>
    );
  }
}

export default createPaginationContainer(
  StoreList,
  graphql`
    fragment storeList_list on RootQuery {
      storeRecommendedChatbots(first: $storeCount, after: $storeCursor)
        @connection(key: "keyList_storeRecommendedChatbots") {
        pageInfo {
          startCursor
          hasPreviousPage
        }
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
  `,
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.list && props.list.storeRecommendedChatbots;
    },
    getVariables(props, { count, cursor }) {
      return {
        storeCount: count,
        storeCursor: cursor
      };
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        storeCount: totalCount
      };
    },
    query: graphql`
      query storeListPaginationQuery($storeCount: Int, $storeCursor: String) {
        ...storeList_list
      }
    `
  }
);
