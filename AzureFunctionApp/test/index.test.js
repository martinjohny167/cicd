const httpFunction = require('../HelloWorld/index');

describe('Hello World Azure Function', () => {
  let context;
  
  beforeEach(() => {
    context = {
      log: jest.fn(),
      res: {}
    };
  });

  // Test case 1: Check if function returns "Hello, World!"
  test('should return Hello World message', async () => {
    await httpFunction(context, { query: {} });
    expect(context.res.body).toBe('Hello, World!');
  });

  // Test case 2: Check if function returns status code 200
  test('should return status code 200', async () => {
    await httpFunction(context, { query: {} });
    expect(context.res.status).toBe(200);
  });

  // Test case 3: Check if function logs that it processed a request
  test('should log that it processed a request', async () => {
    await httpFunction(context, { query: {} });
    expect(context.log).toHaveBeenCalledWith('JavaScript HTTP trigger function processed a request.');
  });
}); 