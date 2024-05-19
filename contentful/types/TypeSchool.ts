import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export interface TypeSchoolFields {
    name: EntryFields.Symbol;
    description?: EntryFields.Text;
    type: EntryFields.Symbol<"academy" | "course" | "highschool" | "training" | "university">;
    startDate?: EntryFields.Date;
    endDate: EntryFields.Date;
    location?: EntryFields.Symbol;
}

export type TypeSchoolSkeleton = EntrySkeletonType<TypeSchoolFields, "school">;
export type TypeSchool = Entry<TypeSchoolSkeleton>;