var redis = require("redis"),
client = redis.createClient();

const hashkey = "HolbertonSchools";

const values = {
  'Portland': 50,
  'Seattle': 80,
  'New York': 20,
  'Bogota': 20,
  'Cali': 40,
  'Paris': 2,
}
for (const [key, value] of Object.entries(values)) {
  client.hset(name, key, value, (err, reply) => {
    redis.print(`Reply: ${reply}`));
}
client.hGetAll(name, (err, reply) => {console.log(reply)});
