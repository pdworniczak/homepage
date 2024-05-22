import { FC } from "react";
import { TypeSectionFields } from "../../contentful/types";
import { isJob } from "../../contentful/typeGuards";
import { Job } from "../Job";

interface SectionProps {
  section: TypeSectionFields;
}

export const Section: FC<SectionProps> = ({ section }) => {
  const { name, title, description, articles } = section;

  return (
    <section id={name}>
      <article>
        {name === "aboutme" ? (
          <aside>
            <img src="/images/pd.jpg" alt="Pawel Dworniczak" />
          </aside>
        ) : null}
        {title && (
          <header>
            <h2>{title}</h2>
            {description?.content?.map(({ content }, index) =>
              content ? (
                <span key={index}>{(content[0] as Text).value}</span>
              ) : (
                ""
              ),
            )}
          </header>
        )}
        {articles &&
          articles
            .filter(isJob)
            .sort(({ fields: jobA }, { fields: jobB }) =>
              jobA && jobB && jobA.startDate > jobB.startDate ? -1 : 1,
            )
            .map(({ fields: jobEntry }) => {
              return jobEntry ? (
                <Job job={jobEntry} key={jobEntry.startDate} />
              ) : null;
            })}
      </article>
    </section>
  );
};
