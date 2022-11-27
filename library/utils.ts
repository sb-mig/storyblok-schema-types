export type RemoveNever<T> = {
    [P in keyof T as T[P] extends never ? never : P]: T[P]
};
