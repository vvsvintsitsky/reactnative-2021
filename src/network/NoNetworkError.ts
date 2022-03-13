export class NoNetworkError extends Error {
  constructor(msg: string, originalError?: Error) {
    super(msg);

    Object.setPrototypeOf(this, NoNetworkError.prototype);

    if (originalError) {
      Error.captureStackTrace(originalError);
    }
  }
}
