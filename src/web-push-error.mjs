import util from 'node:util';

function WebPushError(message, statusCode, headers, body, endpoint) {
  Error.captureStackTrace(this, this.constructor);

  this.name = this.constructor.name;
  this.message = message;
  this.statusCode = statusCode;
  this.headers = headers;
  this.body = body;
  this.endpoint = endpoint;
}

util.inherits(WebPushError, Error);

export default WebPushError;