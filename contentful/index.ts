import { createClient, Entry } from "contentful";

export interface Project {
  name: string;
}

export interface Job {
  companyName: string;
  jobTitle: string;
  description?: string;
  startDate: string;
  endDate: string;
  projects: Entry<Project>[];
}

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

export async function fetchDataTypes() {
  const types = await client.getContentTypes();

  return types;
}
