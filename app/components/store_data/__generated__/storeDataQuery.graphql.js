/**
 * @flow
 * @relayHash 77f13c88fae7127ef3eade0824d48a9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type storeList_list$ref = any;
export type storeDataQueryVariables = {|
  storeCount?: ?number
|};
export type storeDataQueryResponse = {|
  +$fragmentRefs: storeList_list$ref
|};
*/


/*
query storeDataQuery(
  $storeCount: Int
) {
  ...storeList_list
}

fragment storeList_list on RootQuery {
  storeRecommendedChatbots(first: $storeCount) {
    edges {
      node {
        id
        active
        chatbot {
          id
          name
        }
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "storeCount",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "storeDataQuery",
  "id": null,
  "text": "query storeDataQuery(\n  $storeCount: Int\n) {\n  ...storeList_list\n}\n\nfragment storeList_list on RootQuery {\n  storeRecommendedChatbots(first: $storeCount) {\n    edges {\n      node {\n        id\n        active\n        chatbot {\n          id\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "storeDataQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "storeList_list",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "storeDataQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "storeRecommendedChatbots",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "storeCount",
            "type": "Int"
          }
        ],
        "concreteType": "StoreChatbotConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "StoreChatbotEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "StoreChatbot",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "active",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "chatbot",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Chatbot",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "storeRecommendedChatbots",
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "storeCount",
            "type": "Int"
          }
        ],
        "handle": "connection",
        "key": "keyList_storeRecommendedChatbots",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cabf4262809599da43043878e39ff736';
module.exports = node;
