import { ConnectionHandler } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";
import uuidv4 from 'uuid/v4';

// const sharedUpdater = (store, viewerId, deleteNodeId) => {
//   const userProxy = store.get(viewerId);
//   const conn = ConnectionHandler.getConnection(
//     userProxy,
//     "keyActivatedChatbotsItem_activatedChatbots",
//     { name: "" }
//   );
//   ConnectionHandler.deleteNode(conn, deleteNodeId);
// };

const commit = (environment, id, commitHandler) => {
  const mutation = graphql`
    mutation deactiveChatbotMutation($input: DeactiveChatbotInput!) {
      deactiveChatbot(input: $input) {
        deactivateChatbotId
        storeChatbotEdge {
          node {
            active
            chatbot {
              id
              name
              description
            }
          }
        }
      }
    }
  `;

  const variables = {
    input: {
      id
    }
  };

  const onCompleted = () => {
    if (commitHandler) commitHandler();
  };

  const optimisticResponse = {
    deactiveChatbot: {
      storeChatbotEdge: {
        node: {
          id: id,
          active: false,
          chatbot: {
            id: uuidv4(),
            name: "loading...",
            description: 'loading...'
          }
        }
      }
    }
  };

  const updater = store => {
    // const viewerId = store
    //   .getRoot()
    //   .getLinkedRecord("viewer")
    //   .getDataID();
    // const deleteId = store
    //   .getRootField("deactiveChatbot")
    //   .getValue("deactivateChatbotId");

    // sharedUpdater(store, viewerId, deleteId);
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    updater,
    optimisticResponse,
    onError: err => console.error(err)
  });
};

export default { commit };
