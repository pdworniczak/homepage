import { ContentfulCollection, createClient, Entry, EntryCollection, RichTextContent } from "contentful";

export interface Project {
    name: string;
    description: string;
    technologies: string[]
    tools: string[]
}

export interface Job {
    companyName: string;
    jobTitle: string;
    description?: string;
    startDate: string;
    endDate: string;
    projects: Entry<Project>[];
}

export interface Section<Type> {
    name: string;
    title?: string;
    description?: RichTextContent;
    article?: Entry<Type>[]
}

export type Sections = { section: Entry<Section<undefined> | Section<Job>>[] }

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
    space: space,
    accessToken: accessToken,
});

export async function fetchJobEntries() {
    const entries = await client.getEntries<Job>({ content_type: "job" });
    return entries;
}

export async function fetchSectionsEntries() {
    const entries = await client.getEntries<Sections>({ content_type: 'sections', include: 10, order: '' });
    return entries;
}

export async function fetchDataTypes() {
    const types = await client.getContentTypes();

    return types;
}
