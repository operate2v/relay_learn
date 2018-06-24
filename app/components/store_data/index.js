import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../../scripts/get_environment";
import StoreList from "./store_list";
import Loading from "./loading";

const query = graphql`
  query storeDataQuery($storeCount: Int $storeCursor: String) {
    ...storeList_list
  }
`;

export default class StoreData extends Component {
  state = {};

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{
          storeCount: 9,
          storeCursor: ""
        }}
        render={({ props }) => {
          if (props) return <StoreList list={props} />;
          return <Loading />;
        }}
      />
    );
  }
}
