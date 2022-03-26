export type SpringPage<T> = {
    content: T[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    first: boolean;
    size: number;
    numberOfElements: number;
    empty: boolean;
}