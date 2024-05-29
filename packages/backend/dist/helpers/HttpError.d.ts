interface HttpError extends Error {
    status: number;
}
export declare const HttpError: (status: number, message?: string) => HttpError;
export {};
