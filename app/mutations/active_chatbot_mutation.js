import { ConnectionHandler } from "relay-runtime";
import { commitMutation, graphql } from "react-relay";
import uuidv4 from "uuid/v4";

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
        activatedChatbotEdge {
          node {
            id
            chatbot {
              id
              name
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

  optimisticUpdater = (store) => {
    const viewerId = store
    .getRoot()
    .getLinkedRecord('viewer').getDataID();

    const aa = store.get(id);
    console.log(aa.getValue('active'))
    aa.setValue(true, 'active');  
  }

  const optimisticResponse = {
    activeChatbot: {
      storeChatbotEdge: {
        node: {
          id: id,
          active: true,
          chatbot: {
            id: uuidv4(),
            name: "loading...",
            description: "loading..."
          }
        }
      }
    }
  };

  const updater = store => {
    const root = store.getRoot()                                              // 현재 최상위 쿼리 ( viewer, node, admin ...)
    const viewer = root.getLinkedRecord('viewer');                            // viewer 쿼리
    const viewerId = viewer.getDataID();                                      // id 가져옴
    const recommendedChatbots = viewer.getLinkedRecords('autocompleteRecommendedChatbots');   // autocompleteRecommendedChatbots 쿼리
    const recommendedChatbotName = recommendedChatbots[0].getValue('name');            // autocompleteRecommendedChatbots 쿼리 안의 첫번째 배열 name

    const resultRoot = store.getRootField('activeChatbot');                   // 반환된 결과 쿼리의 root 필드 탐색
    const resultActivateEdge = resultRoot.getLinkedRecord('activatedChatbotEdge');
    const resultActivateNode = resultActivateEdge.getLinkedRecord('node');
    const resultActivateChatbot = resultActivateNode.getLinkedRecord('chatbot');
    const resultActivatedName = resultActivateChatbot.getValue('name');

    const conn = ConnectionHandler.getConnection(
      store.get(viewerId),
      'list_activatedChatbots',
    );
    ConnectionHandler.insertEdgeAfter(conn, resultActivateEdge);
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    optimisticResponse,
    // optimisticUpdater,
    updater,
    onError: err => console.error(err)
  });
};

export default { commit };
