import type { Entry } from "contentful";
import type { TypeSectionFields } from "./TypeSection";

export interface TypeSectionsFields {
    section?: Entry<TypeSectionFields>[];
}

export type TypeSections = Entry<TypeSectionsFields>;
