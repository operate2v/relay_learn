import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { AsyncStorage } from "react-native";
import { GRAPHQL_SERVER_URI } from "../app/constants/uri";

const handlerProvider = null;
const serverUri = GRAPHQL_SERVER_URI;

function fetchQuery(operation, variables) {
  return AsyncStorage.getItem("@AccessToken:key")
    .then(accessToken =>
      fetch(serverUri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          accessToken
        },
        body: JSON.stringify({
          query: operation.text, // GraphQL text from input
          variables
        })
      }).then(response => response.json())
    )
    .catch(error => {
      console.log(error);
    });
}

const websocketURL = 'wss://subscriptions.graph.cool/v1/__GRAPHCOOL_PROJECT_ID__'

function setupSubscription(
  config,
  variables,
  cacheConfig,
  observer,
) {
  const query = config.text

  const subscriptionClient = new SubscriptionClient(websocketURL, {reconnect: true})
  const id = subscriptionClient.subscribe({query, variables}, (error, result) => {
    observer.onNext({data: result})
  })
}


const network = Network.create(fetchQuery);
// const network = Network.create(fetchQuery, setupSubscription);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  handlerProvider,
  network,
  store
});
