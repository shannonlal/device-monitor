export interface IResponse<T> {
    content: T;
    httpStatus: number;
    errorMessage?: string;
}
