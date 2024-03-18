import type { Entry, EntryFields } from "contentful";
import type { TypeJobFields } from "./TypeJob";

export interface TypeSectionFields {
    name?: EntryFields.Symbol;
    title?: EntryFields.Symbol;
    description?: EntryFields.RichText;
    article?: Entry<TypeJobFields>[];
}

export type TypeSection = Entry<TypeSectionFields>;
