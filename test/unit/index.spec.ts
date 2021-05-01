it('can run the index.ts file', async () => {
    const module = await import('../../src/index');

    expect(module).toBeDefined();
});
