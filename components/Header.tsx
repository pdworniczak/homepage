import { SectionEntry, SECTIONS_CONFIG } from "../contentful/types";

interface HeaderProps {
  sections: SectionEntry[];
}

export const Header = ({ sections }: HeaderProps) => (
  <header>
    <nav>
    </nav>
  </header>
);
