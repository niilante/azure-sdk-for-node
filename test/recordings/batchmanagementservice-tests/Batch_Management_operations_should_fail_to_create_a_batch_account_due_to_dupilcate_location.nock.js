// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'jsjapaneast';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2017-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/88638849-d425-4d83-aa5d-37f43008b82c?api-version=2017-01-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'request-id': '88638849-d425-4d83-aa5d-37f43008b82c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2389d242-911f-43a1-a319-08095bec9636',
  'x-ms-correlation-request-id': '2389d242-911f-43a1-a319-08095bec9636',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000658Z:2389d242-911f-43a1-a319-08095bec9636',
  date: 'Sat, 18 Feb 2017 00:06:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2?api-version=2017-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/88638849-d425-4d83-aa5d-37f43008b82c?api-version=2017-01-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'request-id': '88638849-d425-4d83-aa5d-37f43008b82c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2389d242-911f-43a1-a319-08095bec9636',
  'x-ms-correlation-request-id': '2389d242-911f-43a1-a319-08095bec9636',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000658Z:2389d242-911f-43a1-a319-08095bec9636',
  date: 'Sat, 18 Feb 2017 00:06:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/88638849-d425-4d83-aa5d-37f43008b82c?api-version=2017-01-01')
  .reply(409, "{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional account quota for the specified subscription has been reached.\\nRequestId:d84e909b-7373-4bdb-8c6f-9a2dcec4477b\\nTime:2017-02-18T00:07:29.7306322Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'd84e909b-7373-4bdb-8c6f-9a2dcec4477b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-request-id': '33ca5001-caaa-4209-9575-cb0d0b5f2916',
  'x-ms-correlation-request-id': '33ca5001-caaa-4209-9575-cb0d0b5f2916',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000729Z:33ca5001-caaa-4209-9575-cb0d0b5f2916',
  date: 'Sat, 18 Feb 2017 00:07:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk2/operationResults/88638849-d425-4d83-aa5d-37f43008b82c?api-version=2017-01-01')
  .reply(409, "{\"code\":\"SubscriptionQuotaExceeded\",\"message\":\"The regional account quota for the specified subscription has been reached.\\nRequestId:d84e909b-7373-4bdb-8c6f-9a2dcec4477b\\nTime:2017-02-18T00:07:29.7306322Z\",\"target\":\"BatchAccount\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'd84e909b-7373-4bdb-8c6f-9a2dcec4477b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14949',
  'x-ms-request-id': '33ca5001-caaa-4209-9575-cb0d0b5f2916',
  'x-ms-correlation-request-id': '33ca5001-caaa-4209-9575-cb0d0b5f2916',
  'x-ms-routing-request-id': 'WESTUS2:20170218T000729Z:33ca5001-caaa-4209-9575-cb0d0b5f2916',
  date: 'Sat, 18 Feb 2017 00:07:29 GMT',
  connection: 'close' });
 return result; }]];