import type { Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeJobFields, TypeJobSkeleton } from "./TypeJob";

export interface TypeSectionFields {
    name: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description: EntryFields.RichText;
    article?: TypeJobSkeleton[];
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, 'section'>;

export type TypeSection = Entry<TypeSectionSkeleton>;
