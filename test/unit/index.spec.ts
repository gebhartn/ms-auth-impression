import { makeLogger } from '../../src/logger';

describe('index', () => {
    it('can run the index.ts file', async () => {
        const module = await import('../../src/index');

        expect(module).toBeDefined();
    });
});

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
});
