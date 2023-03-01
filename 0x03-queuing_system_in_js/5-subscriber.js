import redis from "redis";

const suscriber = redis.createClient();
suscriber.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
suscriber.on('ready', console.log("Redis client connected to the server"));

suscriber.connect();
suscriber.subscribe('holberton school channel', (err, message) => {
  if (message === 'KILL_SERVER'){
    unsubscribe('holberton school channel');
    suscriber.quit();
  }
  else console.log(message);
});
