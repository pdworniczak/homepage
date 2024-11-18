import { SectionEntry, SECTIONS_CONFIG } from "../../contentful/types";
import { Section } from "./Section";

interface SectionsProps {
  sections: SectionEntry[];
}

export const Sections = ({ sections }: SectionsProps) => {
  return (
    <>
      {
        SECTIONS_CONFIG.map(({ id }) => {
          const currentSection = sections.find((section) => section.fields.name === id)

          return (currentSection && <Section key={id} section={currentSection} />)
        })
      }
    </>
  )
};
