/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Account
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreAccountManagementClient.
 */
export interface Account {

    /**
     * Deletes the specified firewall rule from the specified Data Lake Store
     * account
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account from
     * which to delete the firewall rule.
     * 
     * @param {string} firewallRuleName The name of the firewall rule to delete.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteFirewallRule(resourceGroupName: string, accountName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteFirewallRule(resourceGroupName: string, accountName: string, firewallRuleName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Data Lake Store firewall rule.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the firewall rule.
     * 
     * @param {string} firewallRuleName The name of the firewall rule to retrieve.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFirewallRule(resourceGroupName: string, accountName: string, firewallRuleName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    getFirewallRule(resourceGroupName: string, accountName: string, firewallRuleName: string, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Lists the Data Lake Store firewall rules within the specified Data Lake
     * Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account from
     * which to get the firewall rules.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listFirewallRules(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;
    listFirewallRules(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;

    /**
     * Creates or updates the specified firewall rule.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account to
     * which to add the firewall rule.
     * 
     * @param {string} name The name of the firewall rule to create or update.
     * 
     * @param {object} parameters Parameters supplied to create the create
     * firewall rule.
     * 
     * @param {string} [parameters.name] the firewall rule's name.
     * 
     * @param {string} [parameters.id] the firewall rule's subscription ID.
     * 
     * @param {string} [parameters.location] the firewall rule's regional location.
     * 
     * @param {object} [parameters.properties] the properties of the firewall rule.
     * 
     * @param {string} [parameters.properties.startIpAddress] the start IP address
     * for the firewall rule.
     * 
     * @param {string} [parameters.properties.endIpAddress] the end IP address for
     * the firewall rule.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdateFirewallRule(resourceGroupName: string, accountName: string, name: string, parameters: models.FirewallRule, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FirewallRule>): void;
    createOrUpdateFirewallRule(resourceGroupName: string, accountName: string, name: string, parameters: models.FirewallRule, callback: ServiceCallback<models.FirewallRule>): void;

    /**
     * Creates the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} name The name of the Data Lake Store account to create.
     * 
     * @param {object} parameters Parameters supplied to create the Data Lake
     * Store account.
     * 
     * @param {string} [parameters.location] the account regional location.
     * 
     * @param {string} [parameters.name] the account name.
     * 
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     * 
     * @param {string} [parameters.identity.type] The type of encryption being
     * used. Currently the only supported type is 'SystemAssigned'. Possible
     * values include: 'SystemAssigned'
     * 
     * @param {object} [parameters.tags] the value of custom properties.
     * 
     * @param {object} [parameters.properties] the Data Lake Store account
     * properties.
     * 
     * @param {string} [parameters.properties.encryptionState] The current state
     * of encryption for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     * 
     * @param {object} [parameters.properties.encryptionConfig] The Key vault
     * encryption configuration.
     * 
     * @param {string} [parameters.properties.encryptionConfig.type] The type of
     * encryption configuration being used. Currently the only supported types
     * are 'UserManaged' and 'ServiceManaged'. Possible values include:
     * 'UserManaged', 'ServiceManaged'
     * 
     * @param {object} [parameters.properties.encryptionConfig.keyVaultMetaInfo]
     * The Key vault information for connecting to user managed encryption keys.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId]
     * The resource identifier for the user managed Key Vault being used to
     * encrypt.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyName]
     * The name of the user managed encryption key.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion]
     * The version of the user managed encryption key.
     * 
     * @param {string} [parameters.properties.endpoint] the gateway host.
     * 
     * @param {string} [parameters.properties.defaultGroup] the default owner
     * group for all new folders and files created in the Data Lake Store account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    create(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Creates the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} name The name of the Data Lake Store account to create.
     * 
     * @param {object} parameters Parameters supplied to create the Data Lake
     * Store account.
     * 
     * @param {string} [parameters.location] the account regional location.
     * 
     * @param {string} [parameters.name] the account name.
     * 
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     * 
     * @param {string} [parameters.identity.type] The type of encryption being
     * used. Currently the only supported type is 'SystemAssigned'. Possible
     * values include: 'SystemAssigned'
     * 
     * @param {object} [parameters.tags] the value of custom properties.
     * 
     * @param {object} [parameters.properties] the Data Lake Store account
     * properties.
     * 
     * @param {string} [parameters.properties.encryptionState] The current state
     * of encryption for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     * 
     * @param {object} [parameters.properties.encryptionConfig] The Key vault
     * encryption configuration.
     * 
     * @param {string} [parameters.properties.encryptionConfig.type] The type of
     * encryption configuration being used. Currently the only supported types
     * are 'UserManaged' and 'ServiceManaged'. Possible values include:
     * 'UserManaged', 'ServiceManaged'
     * 
     * @param {object} [parameters.properties.encryptionConfig.keyVaultMetaInfo]
     * The Key vault information for connecting to user managed encryption keys.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId]
     * The resource identifier for the user managed Key Vault being used to
     * encrypt.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyName]
     * The name of the user managed encryption key.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion]
     * The version of the user managed encryption key.
     * 
     * @param {string} [parameters.properties.endpoint] the gateway host.
     * 
     * @param {string} [parameters.properties.defaultGroup] the default owner
     * group for all new folders and files created in the Data Lake Store account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    beginCreate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Updates the specified Data Lake Store account information.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} name The name of the Data Lake Store account to update.
     * 
     * @param {object} parameters Parameters supplied to update the Data Lake
     * Store account.
     * 
     * @param {string} [parameters.location] the account regional location.
     * 
     * @param {string} [parameters.name] the account name.
     * 
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     * 
     * @param {string} [parameters.identity.type] The type of encryption being
     * used. Currently the only supported type is 'SystemAssigned'. Possible
     * values include: 'SystemAssigned'
     * 
     * @param {object} [parameters.tags] the value of custom properties.
     * 
     * @param {object} [parameters.properties] the Data Lake Store account
     * properties.
     * 
     * @param {string} [parameters.properties.encryptionState] The current state
     * of encryption for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     * 
     * @param {object} [parameters.properties.encryptionConfig] The Key vault
     * encryption configuration.
     * 
     * @param {string} [parameters.properties.encryptionConfig.type] The type of
     * encryption configuration being used. Currently the only supported types
     * are 'UserManaged' and 'ServiceManaged'. Possible values include:
     * 'UserManaged', 'ServiceManaged'
     * 
     * @param {object} [parameters.properties.encryptionConfig.keyVaultMetaInfo]
     * The Key vault information for connecting to user managed encryption keys.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId]
     * The resource identifier for the user managed Key Vault being used to
     * encrypt.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyName]
     * The name of the user managed encryption key.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion]
     * The version of the user managed encryption key.
     * 
     * @param {string} [parameters.properties.endpoint] the gateway host.
     * 
     * @param {string} [parameters.properties.defaultGroup] the default owner
     * group for all new folders and files created in the Data Lake Store account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    update(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    update(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Updates the specified Data Lake Store account information.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} name The name of the Data Lake Store account to update.
     * 
     * @param {object} parameters Parameters supplied to update the Data Lake
     * Store account.
     * 
     * @param {string} [parameters.location] the account regional location.
     * 
     * @param {string} [parameters.name] the account name.
     * 
     * @param {object} [parameters.identity] The Key vault encryption identity, if
     * any.
     * 
     * @param {string} [parameters.identity.type] The type of encryption being
     * used. Currently the only supported type is 'SystemAssigned'. Possible
     * values include: 'SystemAssigned'
     * 
     * @param {object} [parameters.tags] the value of custom properties.
     * 
     * @param {object} [parameters.properties] the Data Lake Store account
     * properties.
     * 
     * @param {string} [parameters.properties.encryptionState] The current state
     * of encryption for this Data Lake store account. Possible values include:
     * 'Enabled', 'Disabled'
     * 
     * @param {object} [parameters.properties.encryptionConfig] The Key vault
     * encryption configuration.
     * 
     * @param {string} [parameters.properties.encryptionConfig.type] The type of
     * encryption configuration being used. Currently the only supported types
     * are 'UserManaged' and 'ServiceManaged'. Possible values include:
     * 'UserManaged', 'ServiceManaged'
     * 
     * @param {object} [parameters.properties.encryptionConfig.keyVaultMetaInfo]
     * The Key vault information for connecting to user managed encryption keys.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.keyVaultResourceId]
     * The resource identifier for the user managed Key Vault being used to
     * encrypt.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyName]
     * The name of the user managed encryption key.
     * 
     * @param {string}
     * [parameters.properties.encryptionConfig.keyVaultMetaInfo.encryptionKeyVersion]
     * The version of the user managed encryption key.
     * 
     * @param {string} [parameters.properties.endpoint] the gateway host.
     * 
     * @param {string} [parameters.properties.defaultGroup] the default owner
     * group for all new folders and files created in the Data Lake Store account.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginUpdate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    beginUpdate(resourceGroupName: string, name: string, parameters: models.DataLakeStoreAccount, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Deletes the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account to
     * delete.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Deletes the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account to
     * delete.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets the specified Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account to
     * retrieve.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccount>): void;
    get(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.DataLakeStoreAccount>): void;

    /**
     * Attempts to enable a user managed key vault for encryption of the specified
     * Data Lake Store account.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account.
     * 
     * @param {string} accountName The name of the Data Lake Store account to
     * attempt to enable the Key Vault for.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    enableKeyVault(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    enableKeyVault(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Lists the Data Lake Store accounts within a specific resource group. The
     * response includes a link to the next page of results, if any.
     *
     * @param {string} resourceGroupName The name of the Azure resource group that
     * contains the Data Lake Store account(s).
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] OData filter. Optional.
     * 
     * @param {number} [options.top] The number of items to return. Optional.
     * 
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     * 
     * @param {string} [options.expand] OData expansion. Expand related resources
     * in line with the retrieved resources, e.g. Categories/$expand=Products
     * would expand Product data in line with each Category entry. Optional.
     * 
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     * 
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     * 
     * @param {boolean} [options.count] A Boolean value of true or false to
     * request a count of the matching resources included with the resources in
     * the response, e.g. Categories?$count=true. Optional.
     * 
     * @param {string} [options.search] A free form search. A free-text search
     * expression to match for whether a particular entry should be included in
     * the feed, e.g. Categories?$search=blue OR green. Optional.
     * 
     * @param {string} [options.format] The desired return format. Return the
     * response in particular formatxii without access to request headers for
     * standard content-type negotiation (e.g Orders?$format=json). Optional.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { filter? : string, top? : number, skip? : number, expand? : string, select? : string, orderby? : string, count? : boolean, search? : string, format? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Lists the Data Lake Store accounts within the subscription. The response
     * includes a link to the next page of results, if any.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.filter] OData filter. Optional.
     * 
     * @param {number} [options.top] The number of items to return. Optional.
     * 
     * @param {number} [options.skip] The number of items to skip over before
     * returning elements. Optional.
     * 
     * @param {string} [options.expand] OData expansion. Expand related resources
     * in line with the retrieved resources, e.g. Categories/$expand=Products
     * would expand Product data in line with each Category entry. Optional.
     * 
     * @param {string} [options.select] OData Select statement. Limits the
     * properties on each entry to just those requested, e.g.
     * Categories?$select=CategoryName,Description. Optional.
     * 
     * @param {string} [options.orderby] OrderBy clause. One or more
     * comma-separated expressions with an optional "asc" (the default) or "desc"
     * depending on the order you'd like the values sorted, e.g.
     * Categories?$orderby=CategoryName desc. Optional.
     * 
     * @param {boolean} [options.count] The Boolean value of true or false to
     * request a count of the matching resources included with the resources in
     * the response, e.g. Categories?$count=true. Optional.
     * 
     * @param {string} [options.search] A free form search. A free-text search
     * expression to match for whether a particular entry should be included in
     * the feed, e.g. Categories?$search=blue OR green. Optional.
     * 
     * @param {string} [options.format] The desired return format. Return the
     * response in particular formatxii without access to request headers for
     * standard content-type negotiation (e.g Orders?$format=json). Optional.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { filter? : string, top? : number, skip? : number, expand? : string, select? : string, orderby? : string, count? : boolean, search? : string, format? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    list(callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Lists the Data Lake Store firewall rules within the specified Data Lake
     * Store account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listFirewallRulesNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;
    listFirewallRulesNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreFirewallRuleListResult>): void;

    /**
     * Lists the Data Lake Store accounts within a specific resource group. The
     * response includes a link to the next page of results, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;

    /**
     * Lists the Data Lake Store accounts within the subscription. The response
     * includes a link to the next page of results, if any.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.DataLakeStoreAccountListResult>): void;
}