const AWS = require('aws-sdk');
const ulid = require('ulid');

const docClient = new AWS.DynamoDB.DocumentClient();

const { TABLE_NAME } = process.env;

module.exports.main = async (event) => {
  console.log('Posting user review: ', event);

  const body = Buffer.from(event.body, 'base64').toString('utf-8');

  let urlParams = new URLSearchParams(body);

  const id = ulid.ulid();
  const rating = urlParams.get('rating');
  const review = urlParams.get('review');

  await docClient
    .transactWrite({
      TransactItems: [
        {
          Put: {
            TableName: TABLE_NAME,
            Item: {
              id,
              rating,
              review,
            },
          },
        },
      ],
    })
    .promise();

  return {
    statusCode: 301,
    headers: {
      Location: `https://gumroad-exp12345.herokuapp.com/`,
    },
    body: JSON.stringify({
      message: 'Done!',
    }),
  };
};
