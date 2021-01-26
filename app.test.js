const app = require('./app.js');
const request = require('supertest');

console.log(app.post);

describe('test app', () => {
	describe('/CAPI', () => {
		it('should respond', done => {
			request(app)
				.post('/CAPI')
				.expect(200, done);
		});
	});
});

