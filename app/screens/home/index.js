import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import styled from "styled-components/native";
import StoreData from '../../components/store_data';
import ActivedChatbotsData from '../../components/actived_chatbots_data/';

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
  render() {
    return (
      <HomeContainer>
        <Text>Home</Text>
        <StoreData />
        <ActivedChatbotsData data={sample}/>
        
      </HomeContainer>
    );
  }
}
