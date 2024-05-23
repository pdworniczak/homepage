import { TypeSchoolFields } from "../contentful/types";

export const School = ({ school }: { school: TypeSchoolFields }) => (
  <article>
    <header>{school.name}</header>
    <section></section>
  </article>
);
