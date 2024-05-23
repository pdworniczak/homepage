import { FC, useRef } from "react";
import styles from "./Job.module.scss";
import dayjs from "dayjs";
import { Project } from "./Project";
import { TypeJobFields } from "../contentful/types";

export const Job: FC<{ job: TypeJobFields }> = ({
  job: { companyName, jobTitle, startDate, description, endDate, projects },
}) => {
  const articleRef = useRef<HTMLDivElement>(null);

  return (
    <article ref={articleRef} className={styles.job}>
      <header>
        <img src="/icons/laptop-svgrepo-com.svg" width={26} height={26} />
        <h3>{jobTitle}</h3>
        <h4>{companyName}</h4>
      </header>
      <article>
        <section>
          <span>{endDate ? dayjs(endDate).format("YYYY MMM") : "present"}</span>
          <span>{" - "}</span>
          <span>{dayjs(startDate).format("YYYY MMM")}</span>
        </section>
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
