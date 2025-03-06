import {
  SchoolEntry,
  SectionEntry,
  JobEntry,
  SCHOOL_TYPE,
  Article,
} from "./types";

export const isSectionTypeGuard = (article: Article): article is SectionEntry => true;

export const isJobTypeGuard = (article: any): article is JobEntry =>
  (article as JobEntry).fields?.companyName !== undefined;

export const isSchoolTypeGuard = (article: any): article is SchoolEntry =>
  (article as SchoolEntry).fields.type !== undefined &&
  SCHOOL_TYPE.includes(
    (article as SchoolEntry).fields.type,
  );
