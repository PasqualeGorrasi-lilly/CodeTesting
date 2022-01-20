const { lambdaHandler } = require('../index');

describe('nodeExample Lambda Handler', () => {
  it('responds with "hello world"', async () => {
    const handlerResponse = await lambdaHandler({}, {});

    expect(handlerResponse).toMatchObject({
      statusCode: 200,
      body: '{"message":"Hello world"}',
    });
  });
});
