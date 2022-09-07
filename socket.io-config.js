import { io } from 'socket.io-client';
import { apiLessBaseUrl, baseUrl } from './utility/base-url';

const socket = io(apiLessBaseUrl);

export default socket;