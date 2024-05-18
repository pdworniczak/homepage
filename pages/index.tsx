import type { NextPage } from "next";
import { FC } from "react";
import Head from "next/head";
import { Job } from "../components/Job";
import { fetchSectionsEntries } from "../contentful";
import { TypeSectionFields, TypeSectionSkeleton } from "../contentful/types";
import styles from "../styles/Home.module.scss";
import Script from "next/script";
import { Text } from "@contentful/rich-text-types";

// import jsPDF from "jspdf";

interface Content {
  sections: TypeSectionSkeleton[];
}
const SECTIONS_NAME = {
  aboutme: "About me",
  jobs: "Work history",
};

type NavMappingKey = keyof typeof SECTIONS_NAME;

const Home: NextPage<Content> = ({ sections }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="personal home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="gtm"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P5342HRQQJ"
      />
      <Script
        id="dl"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P5342HRQQJ');
            `,
        }}
      />
      <main className={styles.main}>
        <header>
          <nav>
            {sections.map(({ fields: { name } }, index) => {
              return (
                <a key={index} href={`#${name}`}>
                  {SECTIONS_NAME[name.toString() as NavMappingKey]}
                </a>
              );
            })}
          </nav>
        </header>
        {Object.keys(SECTIONS_NAME).map((sectionId) => {
          const section = sections.find(
            (section) => section.fields.name === sectionId,
          );

          if (section) {
            return <Section key={sectionId} section={section.fields} />;
          }
        })}

        <footer>
          {/* <button onClick={() => {
            const doc = new jsPDF('p', 'pt', 'a4');
            const mainElement = document.querySelector('main');

            if (mainElement) {
              doc.html(mainElement, {
                callback: function (doc) {
                  doc.save();
                },
                autoPaging: 'text',
                margin: [20, 0, 20, 0],
              });
            }

          }}>Gen PDF</button> */}
        </footer>
      </main>
    </>
  );
};

interface SectionProps {
  section: TypeSectionFields;
}

const Section: FC<SectionProps> = ({
  section: { name, title, description, article },
}) => {
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
        {article
          ?.sort(({ fields: jobA }, { fields: jobB }) =>
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

type CheckClassNameType = { check: any; className: string };
type ClassNameType = String | CheckClassNameType;

const cslsa = (cslsa: ClassNameType[]) => {
  return cslsa
    .reduce<string[]>((cnts, cnt) => {
      if (typeof cnt === "object" && (cnt as CheckClassNameType).check) {
        return [...cnts, (cnt as CheckClassNameType).className];
      } else if (typeof cnt === "string") {
        return [...cnts, cnt];
      }
      return cnts;
    }, [])
    .join(" ");
};

export const getStaticProps = async () => {
  const entrySections = await fetchSectionsEntries();

  return {
    props: {
      sections: entrySections.items,
    },
  };
};

export default Home;
