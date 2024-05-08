import type { Entry, EntrySkeletonType, EntryFields } from "contentful";

export interface TypeHeaderFields {
    title?: EntryFields.Symbol;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, 'header'>;

export type TypeHeader = Entry<TypeHeaderSkeleton>;
