import React, { Component } from "react";
import { createFragmentContainer } from "react-relay";
import { SafeAreaView, Text, Button } from "react-native";
import styled from "styled-components/native";
import { ActiveChatbotMutation, DeactiveChatbotMutation } from '../../mutations';

const DetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

class DetailInfo extends Component {
  state = {};

  activeChatbot = () => {
    ActiveChatbotMutation.commit(
      this.props.relay.environment,
      this.props.detail.node.id,
      () => {},
    );
  }

  deactiveChatbot = () => {
    DeactiveChatbotMutation.commit(
      this.props.relay.environment,
      this.props.detail.node.id,
      () => {},
    );
  }



  render() {
    const { node } = this.props.detail;

    return (
      <DetailContainer>
        <Text>{node.chatbot.name}</Text>
        <Text>active: {node.active ? "true" : "false"}</Text>
        <Text>{node.chatbot.description}</Text>
        <Button title="active" onPress={() => this.activeChatbot()} />
        <Button title="deactive" onPress={() => this.deactiveChatbot()} />
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
          chatbot {
            id
            name
            description
          }
        }
      }
    }
  `
);
