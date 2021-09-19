const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const { TABLE_NAME } = process.env;

module.exports.main = async (event) => {
  const result = await docClient
    .scan({
      TableName: TABLE_NAME,
    })
    .promise();

  console.log('Wata', result);

  return result.Items;
};
