import type { Entry, EntryFields, EntrySkeletonType } from "contentful";
import type { TypeProjectSkeleton } from "./TypeProject";

export interface TypeJobFields {
    companyName: EntryFields.Symbol;
    jobTitle: EntryFields.Symbol;
    startDate: EntryFields.Date;
    endDate?: EntryFields.Date;
    description?: EntryFields.Symbol;
    projects?: TypeProjectSkeleton[];
    city?: EntryFields.Symbol;
}

export type TypeJobSkeleton = EntrySkeletonType<TypeJobFields, 'job'>;

export type TypeJob = Entry<TypeJobSkeleton>;
