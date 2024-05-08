import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeProjectFields {
    name?: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    technologies?: EntryFields.Symbol[];
    tools?: EntryFields.Symbol[];
    company?: EntryFields.Symbol;
}

export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, 'project'>;

export type TypeProject = Entry<TypeProjectSkeleton>;
