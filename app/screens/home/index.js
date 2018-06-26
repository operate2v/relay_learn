import React, { Component } from "react";
import { Text, AsyncStorage } from "react-native";
import styled from "styled-components/native";
import { ChatMessageCreatedSubscription } from "../../subscriptions";
import StoreData from "../../components/store_data";
import ActivedChatbotsData from "../../components/actived_chatbots_data/";
import UserData from "../../components/user_data";
import environment from "../../../scripts/get_environment";

const sample = [
  { id: "1", name: "krak iron" },
  { id: "2", name: "memodfk dalle" },
  { id: "3", name: "love dinel" },
  { id: "4", name: "show wkwelid" },
  { id: "5", name: "qiain killer" }
];

const HomeContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export default class Home extends Component {
  state = {};

  componentDidMount = () => {
    AsyncStorage.getItem("@AccessToken:key").then(accessToken =>
      ChatMessageCreatedSubscription.commit(environment, accessToken)
    );
  };

  render() {
    return (
      <HomeContainer>
        <Text>Home</Text>
        <StoreData />
        <ActivedChatbotsData data={sample} />
        <UserData />
      </HomeContainer>
    );
  }
}
