import { FC } from "react";
import { Job } from "../../contentful";
import { formatDate } from "../../utils";
import styles from "./jobs.module.scss";

export const Jobs: FC<{ job: Job }> = ({ job }) => (
  <article className={styles.container}>
    <header>
      <h3>{job.companyName}</h3>
      <h4>{job.jobTitle}</h4>
    </header>
    <article>
      <section>
        <span>{formatDate(job.startDate)}</span>
        {" - "}
        <span>{formatDate(job.endDate)}</span>
      </section>
      <section>{job.description}</section>
      <section className={styles.projects}>
        {job.projects && (
          <>
            {job.projects.map((project, index) => (
              <article className={styles.title} key={index}>
                {project.fields.name}
              </article>
            ))}
          </>
        )}
      </section>
    </article>
  </article>
);
