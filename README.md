# 📬 BullMQ Email Queue

A minimal background job queue demo using [BullMQ](https://docs.bullmq.io/) and Redis. Simulates sending emails by queuing jobs from a producer and processing them asynchronously in a worker.

---

## 🗂 Project Structure

```
BullMQ/
├── producer.js   # Adds email jobs to the queue
├── worker.js     # Picks up and processes jobs
└── package.json
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [Redis](https://redis.io/) running locally on `localhost:6379`

To start Redis locally:
```bash
redis-server
```

---

## 🚀 Getting Started

**1. Install dependencies**
```bash
npm install bullmq
```

**2. Start the worker** (listens for jobs)
```bash
node worker.js
```

**3. Add a job** (in a separate terminal)
```bash
node producer.js
```

---

## 🔌 Redis Connection

Both the producer and worker require an explicit Redis connection:

```js
const connection = {
  host: 'localhost',
  port: 6379,
}
```

> If using a remote Redis (e.g. Redis Cloud, Upstash), update `host`, `port`, and add `password` / `username` as needed.

---

## 🧪 How It Works

| File | Role |
|------|------|
| `producer.js` | Creates a `Queue` and pushes an email job with `{ email, subject, body }` |
| `worker.js` | Creates a `Worker` that listens on the same queue and processes each job |

The worker simulates a 5-second email send using a `setTimeout`-based promise before marking the job complete.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| [`bullmq`](https://www.npmjs.com/package/bullmq) | Redis-backed job queue |

---

## 📄 License

MIT