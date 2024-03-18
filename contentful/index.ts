import { createClient } from "contentful";
import { TypeJobFields, TypeSectionsFields } from "./types";


const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
    space: space,
    accessToken: accessToken,
});

export async function fetchJobEntries() {
    const entries = await client.getEntries<TypeJobFields>({ content_type: "job" });
    return entries;
}

export async function fetchSectionsEntries() {
    const entries = await client.getEntries<TypeSectionsFields>({ content_type: 'sections', include: 10, order: '' });
    return entries;
}

export async function fetchDataTypes() {
    const types = await client.getContentTypes();

    return types;
}
