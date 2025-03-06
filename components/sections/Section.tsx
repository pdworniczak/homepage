import { FC } from "react";
import { SectionEntry, TypeSectionSkeleton } from "../../contentful/types";
import { isJobTypeGuard, isSchoolTypeGuard } from "../../contentful/typeGuards";
import { Job } from "../Job";
import { Education } from "../Education";
import { } from 'contentful'
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface SectionProps {
  section: SectionEntry;
}

export const Section: FC<SectionProps> = ({ section }) => {
  const { name, title, description, articles } = section.fields;

  return (
    <section id={name}>
      {name === "aboutme" ? (
        <aside>
          <img src="/images/pd.jpg" alt="Pawel Dworniczak" />
        </aside>
      ) : null}
      {title && (
        <header>
          <h2>{title}</h2>
          {description && <span>{documentToPlainTextString(description)}</span>}
        </header>
      )}
      {articles &&
        articles
          .filter(isJobTypeGuard)
          .sort(({ fields: jobA }, { fields: jobB }) =>
            jobA && jobB && jobA.startDate > jobB.startDate ? -1 : 1,
          )
          .map((job, index) => {
            return job ? (
              <Job job={job} key={index} />
            ) : null;
          })}
      {articles &&
        articles
          .filter(isSchoolTypeGuard)
          .map((school, index) => (
            <Education school={school} key={index} />
          ))}
    </section>
  );
};
