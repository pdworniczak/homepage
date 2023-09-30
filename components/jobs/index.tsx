import { FC } from "react";
import { Job } from "../../contentful";
import styles from "./jobs.module.scss";
import dayjs from 'dayjs';

export const Jobs: FC<{ job: Job }> = ({ job }) => (
  <article className={styles.container}>
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
              <article className={styles.title} key={index}>
                {project.name}
                <section>
                  {JSON.stringify(project, null, 2)}
                </section>
              </article>
            ))}
          </>
        )}
      </section>
    </article>
  </article>
);
