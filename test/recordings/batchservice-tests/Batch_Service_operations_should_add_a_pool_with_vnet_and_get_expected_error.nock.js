// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-01-01.4.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:fe6f3b32-84e7-4dc1-be48-4a7bfc1b276d\\nTime:2017-02-03T21:54:15.3310179Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"subnetId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified subnetId is in a different subscription and cannot be used with the current Batch account in subscription 46241355-bb95-46a9-ba6c-42b554d71925\"\r\n    }\r\n  ]\r\n}", { 'content-length': '846',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fe6f3b32-84e7-4dc1-be48-4a7bfc1b276d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-01-01.4.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:fe6f3b32-84e7-4dc1-be48-4a7bfc1b276d\\nTime:2017-02-03T21:54:15.3310179Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"subnetId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified subnetId is in a different subscription and cannot be used with the current Batch account in subscription 46241355-bb95-46a9-ba6c-42b554d71925\"\r\n    }\r\n  ]\r\n}", { 'content-length': '846',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'fe6f3b32-84e7-4dc1-be48-4a7bfc1b276d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:15 GMT',
  connection: 'close' });
 return result; }]];