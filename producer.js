const { Queue } = require('bullmq')


const notificationQueue = new Queue('email-queue');


async function init(){
    const res = await notificationQueue.add('email to Prasiddha',{
        email:'prasiddhak77@gmail.com',
        subject:'Welcome to the system!',
        body:'Hey Prasiddha, what is up??'
    })
    console.log('Job added to queue',res.id)
}

init()