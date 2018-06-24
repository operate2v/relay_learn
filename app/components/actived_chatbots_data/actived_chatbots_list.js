import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import ActivedChatbotsItem from "./actived_chatbots_item";

const ListContainer = styled.View`
  background-color: #ccc;
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

class ActivedChatbotsList extends Component {
  state = {};

  footer = () => {
    return (
      <Footer>
        <Text>sibal</Text>
      </Footer>
    );
  };

  header = () => {
    return (
    <Text>활성챗봇 리스트</Text>
    )
  }

  render() {
    const { activatedChatbots } = this.props.list;
    return (
      <ListContainer>
        <FlatList
          ListFooterComponent={this.footer()}
          ListHeaderComponent={this.header()}
          data={activatedChatbots.edges}
          keyExtractor={({ node }) => node.chatbot.id}
          renderItem={({ item }) => (
            <ActivedChatbotsItem>{item.node.chatbot.name}</ActivedChatbotsItem>
          )}
        />
      </ListContainer>
    );
  }
}

export default createFragmentContainer(
  ActivedChatbotsList,
  graphql`
    fragment activedChatbotsList_list on User {
      activatedChatbots(first: $activeChatbotsCount)
        @connection(key: "keyList_activatedChatbots") {
        edges {
          node {
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
