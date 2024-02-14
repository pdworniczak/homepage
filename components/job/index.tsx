import { FC, useRef } from "react";
import { Job as JobType } from "../../contentful";
import styles from "./Job.module.scss";
import dayjs from 'dayjs';
import { Project } from "./Project";
import { useElementOnTop } from "../../hooks/useElementOnTop";

export const Job: FC<{ job: JobType }> = ({ job }) => {
  const articleRef = useRef<HTMLDivElement>(null);

  useElementOnTop(articleRef.current);

  return (
    <article ref={articleRef} className={styles.container}>
      <header>
        <h3>{job.companyName}</h3>
        <h4>{job.jobTitle}</h4>
      </header>
      <article>
        <section>
          <span>{dayjs(job.startDate).format('YYYY MMM')}</span>
          {" - "}
          <span>{dayjs(job.endDate).format('YYYY MMM')}</span>
        </section>
        <section>{job.description}</section>
        <section className={styles.projects}>
          {job.projects && (
            <>
              {job.projects.map(({ fields: project }, index) => (
                <Project key={`${index}_${project.name}`} project={project} />
              ))}
            </>
          )}
        </section>
      </article>
    </article>
  )
};
