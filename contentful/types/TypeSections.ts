import type { Entry, EntrySkeletonType } from "contentful";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeSectionsFields {
    section?: Entry<TypeSectionSkeleton>[];
}

export type TypeSectionsSkeleton = EntrySkeletonType<TypeSectionsFields, 'sections'>;

export type TypeSections = Entry<TypeSectionsSkeleton>;
