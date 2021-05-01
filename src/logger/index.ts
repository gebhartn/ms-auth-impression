import winston from 'winston';

export const makeLogger = () => {
    return winston.createLogger({
        level: process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
        levels: {
            error: 0,
            warn: 1,
            info: 2,
            http: 3,
            debug: 4,
        },
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
            winston.format.colorize({ all: process.env.NODE_ENV !== 'production' }),
            winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
        ),
        transports: [new winston.transports.Console()],
    });
};

const Logger = makeLogger();

export default Logger;
