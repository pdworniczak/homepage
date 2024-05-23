import "dotenv/config";
import { createClient } from "contentful";
import { TypeHomepageSkeleton, TypeSectionSkeleton } from "./types";
import { assert } from "console";

const space = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || "";

assert(space, "no space");
assert(accessToken, "no accessToken");

const client = createClient({
  accessToken,
  space,
});

export async function fetchSectionEntries() {
  const entries = await client.getEntries<TypeSectionSkeleton>({
    content_type: "section",
    include: 10,
  });
  return entries;
}

export async function fetchHomepageEntry() {
  const entries = await client.getEntries<TypeHomepageSkeleton>({
    content_type: "homepage",
    include: 10,
  });
  return entries;
}

export async function fetchDataTypes() {
  const types = await client.getContentTypes();

  return types;
}
