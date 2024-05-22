import { TypeSectionFields, TypeSectionSkeleton } from "../../contentful/types";
import { SECTIONS_NAME } from "../../types";
import { Section } from "./Section";

interface SectionsProps {
  sections: TypeSectionSkeleton[];
}

export const Sections = ({ sections }: SectionsProps) => (
  <>
    {Object.keys(SECTIONS_NAME).map((sectionId) => {
      const section = sections.find(
        (section) => section.fields.name === sectionId,
      );
      if (section) {
        return <Section key={sectionId} section={section.fields} />;
      }
    })}
  </>
);
