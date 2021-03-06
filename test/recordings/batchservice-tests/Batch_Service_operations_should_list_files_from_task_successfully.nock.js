// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.6577137Z\",\"lastModified\":\"2017-02-03T21:54:32.6577137Z\",\"contentLength\":\"2657\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.5937151Z\",\"lastModified\":\"2017-02-03T21:54:32.5937151Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.5927145Z\",\"lastModified\":\"2017-02-03T21:54:32.6677137Z\",\"contentLength\":\"13\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/wd\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a3e6bb60-dd5e-451f-aaab-3d14485e97de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:56:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#files\",\"value\":[\r\n    {\r\n      \"name\":\"ProcessEnv.cmd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/ProcessEnv.cmd\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.6577137Z\",\"lastModified\":\"2017-02-03T21:54:32.6577137Z\",\"contentLength\":\"2657\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stderr.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.5937151Z\",\"lastModified\":\"2017-02-03T21:54:32.5937151Z\",\"contentLength\":\"0\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"stdout.txt\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt\",\"isDirectory\":false,\"properties\":{\r\n        \"creationTime\":\"2017-02-03T21:54:32.5927145Z\",\"lastModified\":\"2017-02-03T21:54:32.6677137Z\",\"contentLength\":\"13\",\"contentType\":\"application/octet-stream\"\r\n      }\r\n    },{\r\n      \"name\":\"wd\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/wd\",\"isDirectory\":true\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a3e6bb60-dd5e-451f-aaab-3d14485e97de',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:56:35 GMT',
  connection: 'close' });
 return result; }]];