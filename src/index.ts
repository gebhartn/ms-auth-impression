/* istanbul ignore file */
import config from 'config';
import server from './server';

const port = process.env.PORT || config.get<number>('port');

server.listen(port);
