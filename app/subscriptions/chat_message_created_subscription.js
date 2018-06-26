import { requestSubscription, graphql } from "react-relay";

const commit = (environment, accessToken) => {
  const subscription = graphql`
    subscription chatMessageCreatedSubscription($accessToken: String) {
      chatMessageCreated(accessToken: $accessToken) {
        ChatMessageEdges {
          node {
            id
            content
            keyboard
          }
        }
      }
    }
  `;

  const variables = {
    accessToken: accessToken
  };

  updater = () => {
    console.log("update됨");
  };

  requestSubscription(
    environment, // see Environment docs
    {
      subscription,
      variables,
      updater,
      // optional but recommended:
      onCompleted: () => {
        /* server closed the subscription */
        console.log("completed subscriptions");
      },
      onError: error => console.error(error)
    }
  );
};

export default { commit };