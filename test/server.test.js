const request = require('supertest');
const server = require('../server.js');

describe('test /api/hello', () => {
  test('it should respond with 200 code', (done) => {
    request(server).get('/api/hello').then((res) => {
      expect(res.statusCode).toBe(200);
      done();
    });
  });
});
