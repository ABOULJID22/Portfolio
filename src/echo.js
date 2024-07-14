/* // echo.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'e65593809847e0cfd43e',
  cluster: 'eu',
  forceTLS: true,

});

export default echo;

 */
// src/services/echo.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

const echo = new Echo({
    broadcaster: 'pusher',
    key:'e65593809847e0cfd43e',
    cluster: 'eu',
    forceTLS: true
});

export default echo;
