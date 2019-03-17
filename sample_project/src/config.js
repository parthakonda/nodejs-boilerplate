/**
 * Base configuration
 */
require('dotenv').config();

module.exports = {
  aws: {
    acessKkey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY,
    bucket: process.eventNames.S3_BUCKET
  },
  logging: {
    path: process.env.LOGS_DIRECTORY || 'applogs/',
    uploadEvery: process.env.UPLOAD_EVERY || '60', // Seconds
    maxFileSize: process.eventNames.MAX_FILE_SIZE || 2000,
    logFileNameFormat: process.env.LOG_FILE_NAME_FORMAT || `%Y-%m-%d-%H-%M.log.gz`
  }
};
