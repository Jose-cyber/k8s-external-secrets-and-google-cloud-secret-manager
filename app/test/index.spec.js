const request = require('supertest');
const testConfig = require('./testConfig');
const app = require('../src/index');

describe('Testando a Aplicação HTTP', () => {
    // method get
    it('Testing method get in / whitout passing middlware credentials', async () => {
      const response = await request(app).get('/');
      expect(response.text).toBe("");
      expect(response.status).toBe(401);
    });

    // testing metod get passing credentials
    it('Testing method get in / passing middlware credentials', async () => {
        const response = await request(app)
          .get('/')
          .auth(testConfig.username, testConfig.password);
        expect(response.status).toBe(200);
        expect(response.text).toBe('{"hello":"world"}');
    });
});
