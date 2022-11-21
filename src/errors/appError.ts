class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number = 404, message: string) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
