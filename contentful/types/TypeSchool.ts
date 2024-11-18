import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import { DegreeType, SchoolType } from "./types";


export interface TypeSchoolFields {
    name: string;
    description?: string;
    type: SchoolType;
    startDate?: Date;
    endDate: Date;
    location?: string;
    degree?: DegreeType;
}

export type TypeSchoolSkeleton = EntrySkeletonType<TypeSchoolFields, "school">;
export type TypeSchool<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSchoolSkeleton, Modifiers, Locales>;
