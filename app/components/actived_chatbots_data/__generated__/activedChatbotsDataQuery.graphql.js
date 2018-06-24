/**
 * @flow
 * @relayHash 1f76e715b0b559c8c58ae6e515501a1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type activedChatbotsList_list$ref = any;
export type activedChatbotsDataQueryVariables = {|
  activeChatbotsCount?: ?number
|};
export type activedChatbotsDataQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: activedChatbotsList_list$ref
  |}
|};
*/


/*
query activedChatbotsDataQuery(
  $activeChatbotsCount: Int
) {
  viewer {
    ...activedChatbotsList_list
    id
  }
}

fragment activedChatbotsList_list on User {
  activatedChatbots(first: $activeChatbotsCount) {
    edges {
      node {
        chatbot {
          id
          name
        }
        id
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
    "name": "activeChatbotsCount",
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
  "name": "activedChatbotsDataQuery",
  "id": null,
  "text": "query activedChatbotsDataQuery(\n  $activeChatbotsCount: Int\n) {\n  viewer {\n    ...activedChatbotsList_list\n    id\n  }\n}\n\nfragment activedChatbotsList_list on User {\n  activatedChatbots(first: $activeChatbotsCount) {\n    edges {\n      node {\n        chatbot {\n          id\n          name\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "activedChatbotsDataQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "activedChatbotsList_list",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "activedChatbotsDataQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "activatedChatbots",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "activeChatbotsCount",
                "type": "Int"
              }
            ],
            "concreteType": "ActivatedChatbotConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ActivatedChatbotEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ActivatedChatbot",
                    "plural": false,
                    "selections": [
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
                      v1,
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
            "name": "activatedChatbots",
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "activeChatbotsCount",
                "type": "Int"
              }
            ],
            "handle": "connection",
            "key": "keyList_activatedChatbots",
            "filters": null
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7bbb71291dd7a932aca03b495895c93';
module.exports = node;
