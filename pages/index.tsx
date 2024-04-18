
import type { NextPage } from "next";
import { FC } from "react";
import Head from "next/head";
import { Job } from "../components/job";
import { fetchSectionsEntries } from "../contentful";
import { TypeSectionSkeleton, TypeSectionsSkeleton } from "../contentful/types";
import styles from "../styles/Home.module.scss";
import Script from 'next/script'
import { Entry, EntryCollection } from "contentful";
import { sectionTypeGuard } from "../contentful/typeGuards";
// import jsPDF from "jspdf";



interface Content {
  sections: EntryCollection<TypeSectionsSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
}
const NAVIGATION_MAPPING = {
  jobs: "Work history",
  aboutme: "About me"
}

type NavMappingKey = keyof typeof NAVIGATION_MAPPING;

const Home: NextPage<Content> = ({ sections }) => {

  console.log(JSON.stringify(sections.items[1].fields, null, 2))

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
            {
              sections.items[0].fields.section?.map((section, index) => {
                if (sectionTypeGuard(section)) {
                  const { fields: { name } } = section;
                  return (

                    < a key={index} href={`#${name}`} >{NAVIGATION_MAPPING[name as NavMappingKey]}</a>
                  )
                }
              })
            }
          </nav>
        </header>

        {
          sections.items[0].fields.section?.map((section, index) => {
            if (sectionTypeGuard(section)) {

              return (
                <Section key={index} section={section} />
              )
            }
          })
        }

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
      </main ></>
  );
};

interface SectionProps {
  section: Entry<TypeSectionSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>
}

const Section: FC<SectionProps> = ({ section: { fields: { description, name, title, article } } }) => {

  return (
    <section id={name.values}>
      <article>
        {name.values === 'aboutme' ?
          <aside>
            <img src="/images/pd.jpg" alt="Pawel Dworniczak" />
          </aside> : null
        }
        {title &&
          <header><h2>{title}</h2>
            {description?.content?.map(({ content }) => content ? <span>{content[0].value}</span> : "")}
          </header>
        }
        {article?.
          sort(({ fields: jobA }, { fields: jobB }) => jobA && jobB && jobA.startDate > jobB.startDate ? -1 : 1).
          map(({ fields: job }) => { return job ? <Job job={job} /> : null })}
      </article>
    </section>)
}

type CheckClassNameType = { check: any, className: string }
type ClassNameType = String | CheckClassNameType

const cslsa = (cslsa: ClassNameType[]) => {
  return cslsa.reduce<string[]>((cnts, cnt) => {
    if (typeof cnt === 'object' && (cnt as CheckClassNameType).check) {
      return [...cnts, (cnt as CheckClassNameType).className]
    } else if (typeof cnt === 'string') {
      return [...cnts, cnt]
    }
    return cnts
  }, []).join(' ')
}

export const getStaticProps = (async () => {
  const sections = await fetchSectionsEntries();

  return {
    props: {
      sections,
    },
  };
});

export default Home;
