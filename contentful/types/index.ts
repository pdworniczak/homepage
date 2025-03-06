import { Entry, UnresolvedLink } from "contentful"
import { TypeSectionSkeleton } from "./TypeSection";
import { TypeSchoolSkeleton } from "./TypeSchool";
import { TypeJobSkeleton } from "./TypeJob";
import { TypeProjectSkeleton } from "./TypeProject";

export type { TypeHeader, TypeHeaderFields, TypeHeaderSkeleton } from "./TypeHeader";
export type { TypeHobby, TypeHobbyFields, TypeHobbySkeleton } from "./TypeHobby";
export type { TypeHomepage, TypeHomepageFields, TypeHomepageSkeleton } from "./TypeHomepage";
export type { TypeJob, TypeJobFields, TypeJobSkeleton } from "./TypeJob";
export type { TypeProject, TypeProjectFields, TypeProjectSkeleton } from "./TypeProject";
export type { TypeSchool, TypeSchoolFields, TypeSchoolSkeleton } from "./TypeSchool";
export type { TypeSection, TypeSectionFields, TypeSectionSkeleton } from "./TypeSection";

export type SectionEntry = Entry<TypeSectionSkeleton, undefined>
export type SchoolEntry = Entry<TypeSchoolSkeleton, undefined>
export type JobEntry = Entry<TypeJobSkeleton, undefined>
export type ProjectEntry = Entry<TypeProjectSkeleton, undefined>


export type Article = UnresolvedLink<"Entry"> | SchoolEntry | SectionEntry | JobEntry;

export const SCHOOL_TYPE = [
    "academy",
    "course",
    "highschool",
    "training",
    "university",
];
export type SchoolType = (typeof SCHOOL_TYPE)[number];

export const DEGREE_TYPE = [
    "bechelor", "doctor", "engineer", "licence", "master"
]
export type DegreeType = (typeof DEGREE_TYPE)[number];

export const HOBBY_TYPE = [
    "entertainment", "science", "sport", "technology"
]
export type HobbyType = (typeof HOBBY_TYPE)[number];

interface SectionConfig {
    id: string
    name: string
}

export const SECTIONS_CONFIG: SectionConfig[] = [
    { id: 'aboutme', name: "About me" },
    { id: 'jobs', name: "Work history" },
    { id: 'education', name: "Education" }
]

export type NavMappingKey = keyof typeof SECTIONS_CONFIG;
