/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the NodeList class.
 * @constructor
 * The list of the node
 *
 * @member {string} [continuationToken]
 *
 * @member {array} [items]
 *
 */
class NodeList {
  constructor() {
  }

  /**
   * Defines the metadata of NodeList
   *
   * @returns {object} metadata of NodeList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeList',
      type: {
        name: 'Composite',
        className: 'NodeList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NodeElementType',
                  type: {
                    name: 'Composite',
                    className: 'Node'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NodeList;
