/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitRoutesTable class.
 * @constructor
 * The routes table associated with the ExpressRouteCircuit
 * @member {string} [addressPrefix] Gets AddressPrefix.
 * 
 * @member {string} nextHopType Gets NextHopType. Possible values for this
 * property include: 'VirtualNetworkGateway', 'VnetLocal', 'Internet',
 * 'VirtualAppliance', 'None'.
 * 
 * @member {string} [nextHopIP] Gets NextHopIP.
 * 
 * @member {string} [asPath] Gets AsPath.
 * 
 */
function ExpressRouteCircuitRoutesTable() {
}

/**
 * Defines the metadata of ExpressRouteCircuitRoutesTable
 *
 * @returns {object} metadata of ExpressRouteCircuitRoutesTable
 *
 */
ExpressRouteCircuitRoutesTable.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitRoutesTable',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitRoutesTable',
      modelProperties: {
        addressPrefix: {
          required: false,
          serializedName: 'addressPrefix',
          type: {
            name: 'String'
          }
        },
        nextHopType: {
          required: true,
          serializedName: 'nextHopType',
          type: {
            name: 'String'
          }
        },
        nextHopIP: {
          required: false,
          serializedName: 'nextHopIP',
          type: {
            name: 'String'
          }
        },
        asPath: {
          required: false,
          serializedName: 'asPath',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExpressRouteCircuitRoutesTable;