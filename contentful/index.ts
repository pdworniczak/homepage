import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries<{ companyName: string }>();
  return entries;
}

export async function fetchDataTypes() {
  const types = await client.getContentTypes();

  return types;
}

const contentful = { fetchEntries };

export default contentful;
