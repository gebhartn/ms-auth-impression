import http from 'http';
import server from '../../src/server';

describe('server', () => {
    let app: http.Server;

    beforeAll(() => {
        app = server.listen(8080);
    });

    it('loads the server', () => {
        return expect(app).toBeDefined();
    });

    afterAll(done => {
        return app.close(done);
    });
});
