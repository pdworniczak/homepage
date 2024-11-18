import { SectionEntry, SECTIONS_CONFIG } from "../contentful/types";

interface HeaderProps {
  sections: SectionEntry[];
}

export const Header = ({ sections }: HeaderProps) => (
  <header>
    <nav>
      {sections.map(({ fields: { name } }, index) => {
        return (
          <a key={index} href={`#${name}`}>
            {/* {SECTIONS_CONFIG.find(config => config.id === name)} */}
          </a>
        );
      })}
    </nav>
  </header>
);
