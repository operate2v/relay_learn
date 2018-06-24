import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../../scripts/get_environment";
import ActivedChatbotsList from "./actived_chatbots_list.js";
import Loading from "./loading";

const query = graphql`
  query activedChatbotsDataQuery($activeChatbotsCount: Int) {
    viewer {
      ...activedChatbotsList_list
    }
  }
`;

export default class ActivedChatbotsData extends Component {
  state = {};
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{
          activeChatbotsCount: 10
        }}
        render={({ props }) => {
          if (props) return <ActivedChatbotsList list={props.viewer} />;
          return <Loading />;
        }}
      />
    );
  }
}
