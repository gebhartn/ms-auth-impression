import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const makeServer = (app: express.Application): express.Application => {
    // The extended option allows to choose between parsing the URL-encoded data with the querystring library when false
    app.use(express.urlencoded({ extended: false }));

    // Returns middleware that only parses json
    app.use(express.json());

    // Returns middleware that parses http cookies
    app.use(cookieParser());

    // Returns middleware to handle cross-origin resource sharing
    app.use(cors());

    return app;
};

const server = makeServer(express());

export default server;
