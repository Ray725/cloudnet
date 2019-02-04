const request = require('supertest');
const app = require('../app.js');

describe('test /api/hello', () => {
  it('should respond with 200 code', (done) => {
    request(app)
      .get('/api/hello')
      .expect(200, done);
  });
});


describe('test /api/getVar', () => {
  it('should respond with 200 code', (done) => {
    request(app)
      .get('/api/getVar')
      .expect(200, done);
  });
});

