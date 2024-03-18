import type { Entry, EntryFields } from "contentful";

export interface TypeHeaderFields {
    title?: EntryFields.Symbol;
}

export type TypeHeader = Entry<TypeHeaderFields>;
