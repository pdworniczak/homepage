interface SectionName {
  id: string
  name: string
}

export const SECTIONS_NAME: SectionName[] = [
  { id: 'aboutme', name: "About me" },
  { id: 'jobs', name: "Work history" },
  { id: 'education', name: "Education" }
]

export type NavMappingKey = keyof typeof SECTIONS_NAME;