/* istanbul ignore file */
import config from 'config';
import server from './server';
import logger from './logger';

const port = process.env.PORT || config.get<number>('port');

server.listen(port, () => void logger.info('Server listening on localhost:' + port));
