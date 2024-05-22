import { TypeSectionSkeleton } from "../contentful/types";
import { NavMappingKey, SECTIONS_NAME } from "../types";

interface HeaderProps {
  sections: TypeSectionSkeleton[];
}

export const Header = ({ sections }: HeaderProps) => (
  <header>
    <nav>
      {sections.map(({ fields: { name } }, index) => {
        return (
          <a key={index} href={`#${name}`}>
            {SECTIONS_NAME[name.toString() as NavMappingKey]}
          </a>
        );
      })}
    </nav>
  </header>
);
