import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeHeaderFields {
    title?: EntryFields.Symbol;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'header'>;

export type TypeHeader = Entry<TypeHeaderSkeleton>;
