class AppError {
  public readonly message: string;

  public readonly statusCode: number; // Status erro do HTTP 400.. 500.. 200

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
