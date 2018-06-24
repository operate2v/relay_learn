/**
 * @flow
 * @relayHash fee37ead49917ad251e731963fb30c66
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type detailInfo_detail$ref = any;
export type storeDetailQueryVariables = {|
  storeId: string
|};
export type storeDetailQueryResponse = {|
  +$fragmentRefs: detailInfo_detail$ref
|};
*/


/*
query storeDetailQuery(
  $storeId: ID!
) {
  ...detailInfo_detail
}

fragment detailInfo_detail on RootQuery {
  node(id: $storeId) {
    __typename
    ... on StoreChatbot {
      id
      active
      averageRating
      chatbot {
        id
        name
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "storeId",
    "type": "ID!",
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
  "name": "storeDetailQuery",
  "id": null,
  "text": "query storeDetailQuery(\n  $storeId: ID!\n) {\n  ...detailInfo_detail\n}\n\nfragment detailInfo_detail on RootQuery {\n  node(id: $storeId) {\n    __typename\n    ... on StoreChatbot {\n      id\n      active\n      averageRating\n      chatbot {\n        id\n        name\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "storeDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "detailInfo_detail",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "storeDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "storeId",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v1,
          {
            "kind": "InlineFragment",
            "type": "StoreChatbot",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "active",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "averageRating",
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
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35015b0e325847ea480cc1d71f742071';
module.exports = node;
