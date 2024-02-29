export default class ExpressError extends Error {
  constructor(message, statusCode) {
    super(); // call the constructor for my parent class
    this.message = message;
    this.statusCode = statusCode;
  }
}
