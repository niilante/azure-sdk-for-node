/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BatchError class.
 * @constructor
 * An error response received from the Azure Batch service.
 * @member {string} [code] Gets or sets an identifier for the error. Codes are
 * invariant and are intended to be consumed programmatically.
 * 
 * @member {object} [message] Gets or sets a message describing the error,
 * intended to be suitable for display in a user interface.
 * 
 * @member {string} [message.lang] Gets or sets the language code of the error
 * message
 * 
 * @member {string} [message.value] Gets or sets the text of the message.
 * 
 * @member {array} [values] Gets or sets a collection of key-value pairs
 * containing additional details about the error.
 * 
 */
function BatchError() {
}

/**
 * Defines the metadata of BatchError
 *
 * @returns {object} metadata of BatchError
 *
 */
BatchError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BatchError',
    type: {
      name: 'Composite',
      className: 'BatchError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'Composite',
            className: 'ErrorMessage'
          }
        },
        values: {
          required: false,
          serializedName: 'values',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'BatchErrorDetailElementType',
                type: {
                  name: 'Composite',
                  className: 'BatchErrorDetail'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = BatchError;