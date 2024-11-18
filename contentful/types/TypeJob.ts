import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProjectSkeleton } from "./TypeProject";

export interface TypeJobFields {
    companyName: EntryFieldTypes.Symbol;
    jobTitle: EntryFieldTypes.Symbol;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    description?: EntryFieldTypes.Symbol;
    projects?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProjectSkeleton>>;
    city?: EntryFieldTypes.Symbol;
}

export type TypeJobSkeleton = EntrySkeletonType<TypeJobFields, "job">;
export type TypeJob<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeJobSkeleton, Modifiers, Locales>;
