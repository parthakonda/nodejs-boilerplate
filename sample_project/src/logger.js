/**
 * Logger for console & stream logs to s3
 */
const winston = require('winston');
const S3StreamLogger = require('s3-streamlogger').S3StreamLogger;
const config = require('./config');

const s3Stream = new S3StreamLogger({
  bucket: config.aws.bucket,
  access_key_id: config.aws.acessKkey,
  secret_access_key: config.aws.secretKey,
  folder: config.logging.path,
  upload_every: config.logging.uploadEvery,
  compress: true,
  max_file_size: config.logging.maxFileSize,
  name_format: config.logging.logFileNameFormat
});

const Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      json: false,
      colorize: true,
      handleExceptions: true,
      timestamp: true
    }),
    new winston.transports.File({
      level: 'info',
      stream: s3Stream
    })
  ],
  exitOnError: false
});

module.exports = {
  Logger
};
