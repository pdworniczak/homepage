import { TypeSchoolFields } from "../contentful/types";
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
      <section>
        <header>{school.name}</header>
        <p>{school.description}</p>
        {/* {school.name} */}
      </section>
    </article>
    <hr />
  </>
);
