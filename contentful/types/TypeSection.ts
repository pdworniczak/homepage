import type { Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeJobSkeleton } from "./TypeJob";
import type { TypeSchoolSkeleton } from "./TypeSchool";

export interface TypeSectionFields {
    name: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    articles?: Array<TypeJobSkeleton | TypeSchoolSkeleton>;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, 'section'>;

export type TypeSection = Entry<TypeSectionSkeleton>;