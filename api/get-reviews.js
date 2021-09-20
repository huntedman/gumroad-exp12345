const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const { TABLE_NAME } = process.env;

module.exports.main = async (event) => {
  let params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: '#id = :id',
    ScanIndexForward: false,
    ExpressionAttributeNames: {
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':id': 'the_minimalist_entrepreneur',
    },
    Limit: 20,
  };

  const result = await docClient.query(params).promise();

  return result.Items;
};
