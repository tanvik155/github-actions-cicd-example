const app = require('./app');
const request = require('supertest');

test('GET / returns Hello CI/CD!', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello CI/CD!');
});
