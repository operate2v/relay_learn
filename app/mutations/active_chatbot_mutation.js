import { ConnectionHandler } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";
import uuidv4 from "uuid/v4";

// const sharedUpdater = (store, viewerId, activatedChatbotEdge, deleteNodeId) => {
//   const userProxy = store.get(viewerId);
//   const conn = ConnectionHandler.getConnection(
//     userProxy,
//     'keyActivatedChatbotsItem_activatedChatbots',
//     { name: '' },
//   );
//   ConnectionHandler.insertEdgeAfter(conn, activatedChatbotEdge);

//   const userProxy2 = store.get(viewerId);
//   const conn2 = ConnectionHandler.getConnection(
//     userProxy2,
//     'keyAutocompleteDeactivatedChatbotsItem_autocompleteDeactivatedChatbots',
//   );
//   ConnectionHandler.deleteNode(conn2, deleteNodeId);
// };

const commit = (environment, id, commitHandler) => {
  const mutation = graphql`
    mutation activeChatbotMutation($input: ActiveChatbotInput!) {
      activeChatbot(input: $input) {
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
    activeChatbot: {
      storeChatbotEdge: {
        node: {
          id: id,
          active: true,
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
    // const activatedChatbotEdge = store
    //   .getRootField('activeChatbot')
    //   .getLinkedRecord('activatedChatbotEdge');
    // if (activatedChatbotEdge === null) return;

    // const viewerId = store
    //   .getRoot()
    //   .getLinkedRecord('viewer')
    //   .getDataID();
    // const deleteNodeId = store
    //   .getRootField('activeChatbot')
    //   .getLinkedRecord('activatedChatbotEdge')
    //   .getLinkedRecord('node')
    //   .getLinkedRecord('chatbot')
    //   .getValue('id');

    // sharedUpdater(store, viewerId, activatedChatbotEdge, deleteNodeId);
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    optimisticResponse,
    // updater,
    onError: err => console.error(err)
  });
};

export default { commit };
