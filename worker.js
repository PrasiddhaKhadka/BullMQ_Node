const { Worker } = require('bullmq')

const connection = {
  host: 'localhost',
  port: 6379,
}

const sendEmail = () => new Promise((res) => setTimeout(() => res(), 5 * 1000));

const worker = new Worker('email-queue', async (job) => {
  console.log('I got a message');
  console.log(`Message rec id: ${job.id}`);
  console.log('Processing Message');
  console.log(`Sending email to ${job.data.email}`);
  await sendEmail();
  console.log('Email Sent');
}, { connection });