// src/utils/logger.ts
import * as fs from 'fs';
import * as path from 'path';

const logDirectory = path.join(__dirname, '../../logs');

// Ensure the log directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const logStream = fs.createWriteStream(path.join(logDirectory, 'app.log'), { flags: 'a' });

// Export logStream
export { logStream };
