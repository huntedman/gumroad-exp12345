const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const { TABLE_NAME } = process.env;

module.exports.main = async (event) => {
  const result = await docClient
    .scan({
      TableName: TABLE_NAME,
    })
    .promise();

  let rating = 0;

  if (result.Count) {
    result.Items.forEach((element) => {
      rating += parseFloat(element.rating);
    });
    rating = (rating / result.Count).toFixed(1);
  }

  return rating;
};
