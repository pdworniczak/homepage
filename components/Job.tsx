import { FC, useRef } from "react";
import styles from "./components.module.scss";
import { Project } from "./Project";
import { JobEntry, ProjectEntry } from "../contentful/types";
import { TimePeriod } from "./TimePeriod";

export const Job: FC<{ job: JobEntry }> = ({ job }) => {
  const { fields: { companyName, jobTitle, startDate, description, endDate, projects }} = job;

  return (
    <article className={styles.job}>
      <header>
        <img src="/icons/work.svg" width={26} height={26} />
        <h3>{jobTitle}</h3>
        <h4>{companyName}</h4>
      </header>
      <article>
        <TimePeriod startDate={startDate} endDate={endDate} />
        {description ? <section>{description}</section> : null}
        <section>
          {projects && (
            <>
              {projects.map((project, index) => (
                <Project key={`${index}`} project={project as ProjectEntry} />
              ))}
            </>
          )}
        </section>
      </article>
    </article>
  );
};
