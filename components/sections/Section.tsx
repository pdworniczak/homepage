import { FC } from "react";
import { TypeSectionFields } from "../../contentful/types";
import { isJobTypeGuard, isSchoolTypeGuard } from "../../contentful/typeGuards";
import { Job } from "../Job";
import { Education } from "../Education";

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
          {description?.content?.map(({ content }, index) =>
            content ? <span key={index}>{content[0].value}</span> : "",
          )}
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
  );
};
