import { makeLogger, printf } from '../../../src/logger';

describe('logger', () => {
    it('logs the correct level in production', async () => {
        process.env.NODE_ENV = 'production';

        const logger = makeLogger();

        expect(logger.level).toBe('warn');
    });

    it('logs the correct level in non-prod', async () => {
        process.env.NODE_ENV = 'apple';

        const logger = makeLogger();

        expect(logger.level).toBe('debug');
    });

    it('formats logs as expected', () => {
        const expected = `[2021-05-01 20:58:14:5814] info: Hello, world`;
        const actual = printf({ timestamp: '2021-05-01 20:58:14:5814', level: 'info', message: 'Hello, world' });

        expect(expected).toBe(actual);
    });
});
