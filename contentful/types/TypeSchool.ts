import type { Entry, EntryFields, EntrySkeletonType } from "contentful";

export const SCHOOL_TYPE = [
  "academy",
  "course",
  "highschool",
  "training",
  "university",
];
export type SchoolType = (typeof SCHOOL_TYPE)[number];

export interface TypeSchoolFields {
  name: EntryFields.Symbol;
  description?: EntryFields.Text;
  type: EntryFields.Symbol<SchoolType>;
  startDate: EntryFields.Date;
  endDate: EntryFields.Date;
  location?: EntryFields.Symbol;
}

export type TypeSchoolSkeleton = EntrySkeletonType<TypeSchoolFields, "school">;
export type TypeSchool = Entry<TypeSchoolSkeleton>;
