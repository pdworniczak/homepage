import type { Entry, EntryFields } from "contentful";

export interface TypeProjectFields {
    name?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    technologies?: EntryFields.Symbol[];
    tools?: EntryFields.Symbol[];
    company?: EntryFields.Symbol;
}

export type TypeProject = Entry<TypeProjectFields>;
