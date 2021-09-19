'use strict';

module.exports.get = async (event) => {
  console.log('Event: ', event);

  let responseMessage = 'Hello, Gumroad!';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
