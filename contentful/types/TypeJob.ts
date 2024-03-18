import type { Entry, EntryFields } from "contentful";
import type { TypeProjectFields } from "./TypeProject";

export interface TypeJobFields {
    companyName: EntryFields.Symbol;
    jobTitle?: EntryFields.Symbol;
    startDate?: EntryFields.Date;
    endDate?: EntryFields.Date;
    description?: EntryFields.Symbol;
    projects?: Entry<TypeProjectFields>[];
    city?: EntryFields.Symbol;
}

export type TypeJob = Entry<TypeJobFields>;
