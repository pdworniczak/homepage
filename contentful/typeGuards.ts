import {
  SchoolEntry,
  SectionEntry,
  JobEntry,
} from "./types";

type Article = SchoolEntry | SectionEntry | JobEntry;

export const isSectionTypeGuard = (ob: any): ob is SectionEntry => true;

export const isJobTypeGuard = (ob: Article): ob is JobEntry =>
  (ob as JobEntry).fields?.companyName !== undefined;

export const isSchoolTypeGuard = (ob: Article): ob is SchoolEntry =>
  (ob as SchoolEntry).fields.type !== undefined &&
  ["academy", "course", "highschool", "training", "university"].includes(
    (ob as SchoolEntry).fields.type,
  );
