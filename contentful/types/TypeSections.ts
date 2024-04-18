import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeSectionsFields {
    section?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
}

export type TypeSectionsSkeleton = EntrySkeletonType<TypeSectionsFields, "sections">;
export type TypeSections<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSectionsSkeleton, Modifiers, Locales>;
