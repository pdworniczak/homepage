import { FC, useRef } from "react";
import { Job as JobType } from "../../contentful";
import styles from "./Job.module.scss";
import dayjs from 'dayjs';
import { Project } from "./Project";

export const Job: FC<{ job: JobType }> = ({ job }) => {
  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <article ref={articleRef} className={styles.job}>
      <header>
        <img src="/icons/laptop-svgrepo-com.svg" width={26} height={26} />
        <h3>{job.jobTitle}</h3>
        <h4>{job.companyName}</h4>
      </header>
      <article>
        <section>
          <span>{dayjs(job.startDate).format('YYYY MMM')}</span>
          {" - "}
          <span>{dayjs(job.endDate).format('YYYY MMM')}</span>
        </section>
        {job.description ? <section>{job.description}</section> : null}
        <section>
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
