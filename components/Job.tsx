import { FC, useRef } from "react";
import styles from "./components.module.scss";
import { Project } from "./Project";
import { TypeJobFields } from "../contentful/types";
import { TimePeriod } from "./TimePeriod";

export const Job: FC<{ job: TypeJobFields }> = ({
  job: { companyName, jobTitle, startDate, description, endDate, projects },
}) => {
  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <article ref={articleRef} className={styles.job}>
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
              {projects.map(({ fields: project }, index) => (
                <Project key={`${index}`} project={project} />
              ))}
            </>
          )}
        </section>
      </article>
    </article>
  );
};
