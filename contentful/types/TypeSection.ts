import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode, EntryFields } from "contentful";
import type { TypeJobSkeleton } from "./TypeJob";

export interface TypeSectionFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description: EntryFields.RichText;
    article?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeJobSkeleton>>;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
