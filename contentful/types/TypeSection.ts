import type { ChainModifiers, Entry, EntryCollection, EntryFieldType, EntryFieldTypes, EntryLink, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHobby, TypeHobbySkeleton } from "./TypeHobby";
import type { TypeJobSkeleton } from "./TypeJob";
import type { TypeSchoolSkeleton } from "./TypeSchool";
import { ProjectEntry, TypeProjectSkeleton } from ".";

export interface TypeSectionFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    articles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHobbySkeleton | TypeProjectSkeleton | TypeSchoolSkeleton | TypeJobSkeleton>>
    images?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
