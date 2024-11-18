import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import { SchoolType } from "./types";

export interface TypeSchoolFields {
    name: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    type: EntryFieldTypes.Symbol<SchoolType>;
    startDate?: EntryFieldTypes.Date;
    endDate: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Symbol;
    degree?: EntryFieldTypes.Symbol<"bechelor" | "doctor" | "engineer" | "licence" | "master">;
}

export type TypeSchoolSkeleton = EntrySkeletonType<TypeSchoolFields, "school">;
export type TypeSchool<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSchoolSkeleton, Modifiers, Locales>;
