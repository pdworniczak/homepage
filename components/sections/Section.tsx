import { FC } from "react";
import { TypeSectionFields } from "../../contentful/types";
import { isJobTypeGuard, isSchoolTypeGuard } from "../../contentful/typeGuards";
import { Job } from "../Job";
import { Education } from "../Education";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { } from 'contentful'
import { Block } from "@contentful/rich-text-types";

interface SectionProps {
  section: TypeSectionFields;
}

export const Section: FC<SectionProps> = ({ section }) => {
  const { name, title, description, articles } = section;

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
          {JSON.stringify(description)}
          {description && <span>{documentToPlainTextString(description)}</span>}
        </header>
      )}
      {articles &&
        articles
          .filter(isJobTypeGuard)
          .sort(({ fields: jobA }, { fields: jobB }) =>
            jobA && jobB && jobA.startDate > jobB.startDate ? -1 : 1,
          )
          .map(({ fields: jobEntry }, index) => {
            return jobEntry ? (
              <Job job={jobEntry} key={index} />
            ) : null;
          })}
      {articles &&
        articles
          .filter(isSchoolTypeGuard)
          .map(({ fields: schoolEntry }, index) => (
            <Education school={schoolEntry} key={index} />
          ))}
    </section>
    // <div>test</div>
  );
};
