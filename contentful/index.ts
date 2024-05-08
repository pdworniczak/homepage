import { createClient } from "contentful";
import { TypeSectionSkeleton } from "./types";
import { assert } from "console";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

assert(space, 'no space');
assert(accessToken, 'no accessToken');

const client = createClient({
    space: space,
    accessToken: accessToken,
});

export async function fetchSectionsEntries() {
    const entries = await client.getEntries<TypeSectionSkeleton>({ content_type: "section", include: 10 });
    return entries;
}


export async function fetchDataTypes() {
    const types = await client.getContentTypes();

    return types;
}
