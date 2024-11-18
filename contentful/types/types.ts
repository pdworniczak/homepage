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