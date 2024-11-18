import { TypeSectionSkeleton, TypeSection, TypeSectionFields } from "../../contentful/types";
import { SECTIONS_NAME } from "../../types";
import { Section } from "./Section";

interface SectionsProps {
  sections: TypeSectionSkeleton[];
}

export const Sections = ({ sections }: SectionsProps) => {
  // const sectionName = 

  return (
    <>
      {
        SECTIONS_NAME.map(({ id }) => {
          const currentSection = sections.find((section) => section.fields.name === id)

          return (currentSection && <Section key={id} section={currentSection.fields} />)
        })
      }
    </>
  )
};
