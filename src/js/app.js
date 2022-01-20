import Loading from './ifLoad';
import Server from './server';

console.log('app started');

const server = new Server();
const load = new Loading(server);

load.events();
