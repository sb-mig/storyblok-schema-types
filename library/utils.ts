export type RemoveNever<T> = {
    [P in keyof T as T[P] extends never ? never : P]: T[P]
};

export type Mapped<
    N extends number,
    Result extends Array<unknown> = [],
> =
    (Result['length'] extends N
        ? Result
        : Mapped<N, [...Result, Result['length']]>
        )
