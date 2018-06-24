import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import { QueryRenderer, graphql } from "react-relay";
import environment from "../../../scripts/get_environment";
import DetailInfo from "./detail_info";
import Loading from "./loading.js";

const query = graphql`
  query storeDetailQuery($storeId: ID!) {
    ...detailInfo_detail
  }
`;

export default class StoreDetail extends Component {
  state = {};
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={{
          storeId: this.props.navigation.state.params.storeId
        }}
        render={({ props }) => {
          if (props) return <DetailInfo detail={props} />;
          return <Loading />;
        }}
      />
    );
  }
}
