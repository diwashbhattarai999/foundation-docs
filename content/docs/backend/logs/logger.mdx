# 📚 Updated Logging & Request Tracing Layer

## ✅ Tools Used

| Tool                | Purpose                        |
| ------------------- | ------------------------------ |
| `winston`           | Core structured logging        |
| `daily-rotate-file` | Log rotation & archival        |
| `morgan`            | HTTP request logger middleware |
| `uuid`              | Unique request identifiers     |

---

## 📦 1. Install Packages

```bash
npm install winston winston-daily-rotate-file morgan uuid
npm install --save-dev @types/winston @types/morgan
```

---

## 🧱 Directory Structure

```
src/
├── logger/
│   ├── winston.logger.ts
│   ├── morgan.middleware.ts
│   └── request-context.middleware.ts
├── types/
│   └── express.d.ts
```

---

## 🛠 2. Winston Logger – `logger/winston.logger.ts`

```ts
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logFormat = winston.format.printf(({ level, message, timestamp, ...meta }) => {
  return `${timestamp} [${level.toUpperCase()}] ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
});

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
  }),
  new DailyRotateFile({
    filename: 'logs/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(winston.format.timestamp(), logFormat),
  }),
];

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), logFormat),
  transports,
});

export default logger;
```

---

## 📋 3. Request Context Middleware – `logger/request-context.middleware.ts`

```ts
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

export function requestContext(req: Request, _res: Response, next: NextFunction) {
  req.context = {
    requestId: uuidv4(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '',
    userId: null,
  };

  next();
}
```

---

## 🧾 4. Morgan Integration – `logger/morgan.middleware.ts`

```ts
import morgan from 'morgan';
import logger from './winston.logger';

// Create a stream object with a 'write' function that Winston uses
const stream = {
  write: (message: string) => {
    logger.http(message.trim());
  },
};

const skip = () => process.env.NODE_ENV === 'test';

export const morganMiddleware = morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr', { stream, skip });
```

> This logs each HTTP request like:
> `GET /api/users 200 123b - 10.22 ms 192.168.1.2`

---

## 🧠 5. Extend Express Types – `types/express.d.ts`

```ts
import 'express';

declare module 'express' {
  export interface Request {
    context: {
      requestId: string;
      ip: string;
      userId?: string | null;
    };
  }
}
```

---

## 🚀 6. Use in Your App

```ts
import express from 'express';
import { requestContext } from './logger/request-context.middleware';
import { morganMiddleware } from './logger/morgan.middleware';
import logger from './logger/winston.logger';

const app = express();

app.use(requestContext); // Inject requestId + ip
app.use(morganMiddleware); // Log HTTP requests

app.get('/health', (req, res) => {
  logger.info('Health check ping', {
    requestId: req.context.requestId,
    ip: req.context.ip,
  });

  res.send('OK');
});
```

---

## ✅ Benefits

| Feature                   | Benefit                                     |
| ------------------------- | ------------------------------------------- |
| Unique `requestId`        | Trace logs per HTTP request                 |
| Context-aware logging     | Includes user, IP, URL                      |
| Morgan + Winston          | Logs both HTTP and custom service info      |
| Rotating log files        | Prevents bloated logs                       |
| Type-safe request context | Cleaner integration with controller/service |
