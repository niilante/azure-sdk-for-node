// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7154?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7154.azuredatalakestore.net\",\"accountId\":\"9a9d619b-c562-4cae-8372-29dc5ca09e98\",\"creationTime\":\"2016-07-01T19:15:59.8565001Z\",\"lastModifiedTime\":\"2016-07-01T19:17:00.4673877Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7154\",\"name\":\"xplattestadls7154\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '42313814-a8a0-4c15-aa6d-1b15673269f0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a0e37ebf-78a1-4062-94b9-b3b09ad84679',
  'x-ms-routing-request-id': 'WESTUS:20160701T191701Z:a0e37ebf-78a1-4062-94b9-b3b09ad84679',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7154?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls7154.azuredatalakestore.net\",\"accountId\":\"9a9d619b-c562-4cae-8372-29dc5ca09e98\",\"creationTime\":\"2016-07-01T19:15:59.8565001Z\",\"lastModifiedTime\":\"2016-07-01T19:17:00.4673877Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls7154\",\"name\":\"xplattestadls7154\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '590',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '42313814-a8a0-4c15-aa6d-1b15673269f0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'a0e37ebf-78a1-4062-94b9-b3b09ad84679',
  'x-ms-routing-request-id': 'WESTUS:20160701T191701Z:a0e37ebf-78a1-4062-94b9-b3b09ad84679',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Jul 2016 19:17:01 GMT',
  connection: 'close' });
 return result; }]];