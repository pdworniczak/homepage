import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeHomepageFields {
    sections: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
}

export type TypeHomepageSkeleton = EntrySkeletonType<TypeHomepageFields, "homepage">;
export type TypeHomepage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomepageSkeleton, Modifiers, Locales>;
