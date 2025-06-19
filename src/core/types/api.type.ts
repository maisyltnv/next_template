export type ApiResponse<T> = {
    status: boolean;
    error?: string;
    data: T;
};

export type ApiResponsePagination<T> = {
    status: boolean;
    error?: string;
    data: {
        page: number
        limit: number
        totalPages: number
        totalRows: number
        rows: T
    };
};