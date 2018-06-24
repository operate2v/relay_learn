/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type detailInfo_detail$ref: FragmentReference;
export type detailInfo_detail = {|
  +node: ?{|
    +id?: string,
    +active?: ?boolean,
    +averageRating?: ?number,
    +chatbot?: ?{|
      +id: string,
      +name: ?string,
    |},
  |},
  +$refType: detailInfo_detail$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "detailInfo_detail",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "storeId",
      "type": "ID!"
    }
  ],
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
          "kind": "InlineFragment",
          "type": "StoreChatbot",
          "selections": [
            v0,
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
                v0,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '7a56e29b768b4a0c1d1d01f33ee83c4d';
module.exports = node;
