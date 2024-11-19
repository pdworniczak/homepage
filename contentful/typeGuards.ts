import {
  SchoolEntry,
  SectionEntry,
  JobEntry,
  SCHOOL_TYPE,
} from "./types";

export type Article = SchoolEntry | SectionEntry | JobEntry;

export const isSectionTypeGuard = (article: Article): article is SectionEntry => true;

export const isJobTypeGuard = (article: Article): article is JobEntry =>
  (article as JobEntry).fields?.companyName !== undefined;

export const isSchoolTypeGuard = (article: Article): article is SchoolEntry =>
  (article as SchoolEntry).fields.type !== undefined &&
  SCHOOL_TYPE.includes(
    (article as SchoolEntry).fields.type,
  );
