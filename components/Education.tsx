import { TypeSchoolFields } from "../contentful/types";
import { SchoolType } from "../contentful/types/TypeSchool";
import { TimePeriod } from "./TimePeriod";
import styles from "./components.module.scss";

export const Education = ({ school }: { school: TypeSchoolFields }) => (
  <>
    <article className={styles.education}>
      <TimePeriod
        startDate={school.startDate}
        endDate={school.endDate}
        orientation="horizontal"
      />
      <Type type={school.type} />
      <SchoolDescription school={school} />
    </article>
    <hr />
  </>
);

const Type = ({ type }: {type: SchoolType}) => (
  <img src={`/icons/${type}.svg`} width={26} height={26} />
)

const SchoolDescription = ({school}: {school: TypeSchoolFields}) => (
  <section>
  <header><h4>{school.name}</h4></header>
  { school.description ? <p>{school.description}</p> : null }
</section>
)

