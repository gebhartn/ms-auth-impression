import winston from 'winston';

const Logger = winston.createLogger({
    level: process.env.NODE_ENV !== 'production' ? 'debug' : 'warn',
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
        winston.format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
    ),
    transports: [new winston.transports.Console()],
});

export default Logger;
