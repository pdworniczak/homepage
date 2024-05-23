import {
  SCHOOL_TYPE,
  TypeJobSkeleton,
  TypeSchoolSkeleton,
  TypeSectionSkeleton,
} from "./types";

type Article = TypeJobSkeleton | TypeSchoolSkeleton;

export const isSectionTypeGuard = (ob: any): ob is TypeSectionSkeleton => true;
export const isJobTypeGuard = (ob: Article): ob is TypeJobSkeleton =>
  (ob as TypeJobSkeleton).fields?.companyName !== undefined;
export const isSchoolTypeGuard = (ob: Article): ob is TypeSchoolSkeleton =>
  (ob as TypeSchoolSkeleton).fields.type !== undefined &&
  ["academy", "course", "highschool", "training", "university"].includes(
    (ob as TypeSchoolSkeleton).fields.type,
  );
