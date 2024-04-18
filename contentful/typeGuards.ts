import { TypeSectionSkeleton } from "./types"

export const sectionTypeGuard = (section: any): section is TypeSectionSkeleton => { return true }
