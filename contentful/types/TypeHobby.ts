import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHobbyFields {
    name: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    type: EntryFieldTypes.Symbol<"entertainment" | "science" | "sport" | "technology">;
}

export type TypeHobbySkeleton = EntrySkeletonType<TypeHobbyFields, "hobby">;
export type TypeHobby<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHobbySkeleton, Modifiers, Locales>;
