import { createClient } from "contentful";
import { TypeJobSkeleton, TypeSectionsSkeleton } from "./types";


const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

const client = createClient({
    space: space,
    accessToken: accessToken,
});

export async function fetchJobEntries() {
    const entries = await client.withoutUnresolvableLinks.getEntries<TypeJobSkeleton>({ content_type: "job" });
    return entries;
}

export async function fetchSectionsEntries() {
    const entries = await client.getEntries<TypeSectionsSkeleton>({ include: 10 });
    return entries;
}

export async function fetchDataTypes() {
    const types = await client.getContentTypes();

    return types;
}
