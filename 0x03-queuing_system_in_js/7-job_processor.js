const kue = require("kue");
const queue = kue.createQueue();

const numbers = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done){
  
  job.progress(0, 100);
  if (numbers.includes(phoneNumbe)){
    done(Error(`Phone number ${phoneNumber} is blacklisted`));
  }
  
  job.progress(50, total);
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );
  done();
}
