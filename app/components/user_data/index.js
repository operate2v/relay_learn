import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../../scripts/get_environment";
import UserForm from "./user_form";
import Loading from "./loading";

const query = graphql`
  query userDataQuery {
    viewer {
      id
      username
      email
      gender
      createdAt
      DeveloperInfomation {
        id
        website
        name
        termsOfService
      }
      autocompleteRecommendedChatbots {
        id
        name
      }
    }
  }
`;

export default class UserData extends Component {
  state = {};
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({ props }) => {
          if (props) return <UserForm user={props.viewer} />;
          return <Loading />;
        }}
      />
    );
  }
}
