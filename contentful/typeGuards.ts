import { TypeJobSkeleton, TypeSchoolSkeleton, TypeSectionSkeleton } from "./types"

type Article = TypeJobSkeleton | TypeSchoolSkeleton;

export const sectionTypeGuard = (ob: any): ob is TypeSectionSkeleton =>  true;
export const isJob = (ob:Article): ob is TypeJobSkeleton => (ob as TypeJobSkeleton).fields.companyName !== undefined;
export const schoolTypeGuard = (ob:Article): ob is TypeSchoolSkeleton => (ob as TypeSchoolSkeleton).fields.type !== undefined;
