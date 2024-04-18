import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeaderFields {
    title?: EntryFieldTypes.Symbol;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;
