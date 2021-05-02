export default class ImpressionError extends Error {
    constructor(public readonly message: string, public readonly status: number) {
        super(message) /* istanbul ignore next */;

        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }

    static badRequest(): ImpressionError {
        return new ImpressionError('Bad Request', 400);
    }

    static unauthorized(): ImpressionError {
        return new ImpressionError('Unauthorized', 401);
    }

    static notFound(): ImpressionError {
        return new ImpressionError('Not Found', 404);
    }

    static internalServerError(): ImpressionError {
        return new ImpressionError('Internal Server Error', 500);
    }
}
