import { SchoolEntry, SchoolType } from "../contentful/types";
import { TimePeriod } from "./TimePeriod";
import styles from "./components.module.scss";

interface EducationProps {
  school: SchoolEntry
}

export const Education = ({ school }: EducationProps) => {
  const { fields: { startDate, endDate, type } } = school

  return (
    <>
      <article className={styles.education}>
        {startDate && endDate && <TimePeriod
          startDate={startDate}
          endDate={endDate}
          orientation="horizontal"
        />}
        <Type type={type} />
        <SchoolDescription school={school} />
      </article>
      <hr />
    </>
  )
};

const Type = ({ type }: { type: SchoolType }) => (
  <img src={`/icons/${type}.svg`} width={26} height={26} />
)

const SchoolDescription = ({ school: { fields: school } }: EducationProps) => (
  <section>
    <header><h4>{school.name}</h4></header>
    {school.description ? <p>{school.description}</p> : null}
  </section>
)

