import redis from "redis";

const client = redis.createClient();
client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('ready', console.log("Redis client connected to the server"));

client.connect();
function setNewSchool(schoolName, value){
  client.set(`${schoolName}`, `${value}`, redis.print);
}

function displaySchoolValue(schoolName){
  const value = client.get(`${schoolName}`);
  console.log = valuue
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

client.disconnect();
