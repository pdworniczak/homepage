import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectFields {
    name?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    technologies?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    tools?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    company?: EntryFieldTypes.Symbol;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
