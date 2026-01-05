import { Response } from 'express';
import { ApiResponse, PaginatedResponse } from '../../shared/interfaces';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '../../shared/constants';

export class ResponseHandler {
  static success<T>(
    res: Response,
    data: T,
    message: string = SUCCESS_MESSAGES.FETCHED,
    statusCode: number = HTTP_STATUS.OK
  ): Response {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
    };
    return res.status(statusCode).json(response);
  }

  static created<T>(res: Response, data: T, message: string = SUCCESS_MESSAGES.CREATED): Response {
    return this.success(res, data, message, HTTP_STATUS.CREATED);
  }

  static paginated<T>(
    res: Response,
    data: T[],
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    },
    message: string = SUCCESS_MESSAGES.FETCHED
  ): Response {
    const response: PaginatedResponse<T> = {
      success: true,
      message,
      data,
      pagination,
    };
    return res.status(HTTP_STATUS.OK).json(response);
  }
}
