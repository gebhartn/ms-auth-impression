import ImpressionError from '../../../src/exceptions/impression-error';

describe('exceptions', () => {
    it('exists', () => {
        expect(ImpressionError).toBeDefined();
        expect(new ImpressionError('Hello', 500)).toBeInstanceOf(Error);
    });

    //; describe('calls super', () => {
    //;     let ParentOriginal: any;
    //;     let ParentMock: jest.Mock;
    //;     beforeEach(() => {
    //;         ParentOriginal = Object.getPrototypeOf(ImpressionError);
    //;         ParentMock = jest.fn();
    //;         Object.setPrototypeOf(ImpressionError, ParentMock);
    //;     });

    //;     it('', () => {
    //;         new ImpressionError('Hello', 666);
    //;         expect(ParentMock.mock.calls.length).toBe(1);
    //;     });

    //;     afterEach(() => {
    //;         Object.setPrototypeOf(ImpressionError, ParentOriginal);
    //;     });
    //; });

    describe('internal server error', () => {
        it('should return a 500 status with an "Internal Server Error" message', () => {
            const exception = ImpressionError.internalServerError();
            expect(exception.status).toBe(500);
            expect(exception.message).toBe('Internal Server Error');
        });
    });
    describe('not found error', () => {
        it('should return a 404 status with a "Not Found" message', () => {
            const exception = ImpressionError.notFound();
            expect(exception.status).toBe(404);
            expect(exception.message).toBe('Not Found');
        });
    });
    describe('unauthorized error', () => {
        it('should return a 404 status with a "Unauthorized" message', () => {
            const exception = ImpressionError.unauthorized();
            expect(exception.status).toBe(401);
            expect(exception.message).toBe('Unauthorized');
        });
    });
    describe('bad request error', () => {
        it('should return a 400 status with a "Bad Request" message', () => {
            const exception = ImpressionError.badRequest();
            expect(exception.status).toBe(400);
            expect(exception.message).toBe('Bad Request');
        });
    });
});
