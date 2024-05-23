import type { Entry, EntrySkeletonType } from "contentful";

export interface TypeHomepageFields {
  sections: Array<TypeHomepageFields>;
}

export type TypeHomepageSkeleton = EntrySkeletonType<
  TypeHomepageFields,
  "homepage"
>;
export type TypeHomepage = Entry<TypeHomepageSkeleton>;
