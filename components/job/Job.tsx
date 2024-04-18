import { FC, useRef } from "react";
import styles from "./Job.module.scss";
import dayjs from 'dayjs';
import { Project } from "./Project";
import { TypeJobFields } from "../../contentful/types";

export const Job: FC<{ job: TypeJobFields }> = ({ job }) => {
    const articleRef = useRef<HTMLDivElement>(null);

    return (
        <article ref={articleRef} className={styles.job}>
            <header>
                <img src="/icons/laptop-svgrepo-com.svg" width={26} height={26} />
                <h3>{job.jobTitle.values}</h3>
                <h4>{job.companyName.values}</h4>
            </header>
            <article>
                <section>
                    <span>{job.endDate ? dayjs(job.endDate).format('YYYY MMM') : 'present'}</span>
                    {" - "}
                    <span>{dayjs(job.startDate).format('YYYY MMM')}</span>
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
