import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHobbySkeleton } from "./TypeHobby";
import type { TypeJobSkeleton } from "./TypeJob";
import type { TypeSchoolSkeleton } from "./TypeSchool";

export interface TypeSectionFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    articles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHobbySkeleton | TypeJobSkeleton | TypeSchoolSkeleton>>;
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
