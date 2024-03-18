
import type { NextPage } from "next";
import { FC } from "react";
import Head from "next/head";
import { Job } from "../components/job";
import { fetchSectionsEntries } from "../contentful";
import { TypeJob, TypeSection } from "../contentful/types";
import styles from "../styles/Home.module.scss";
import Script from 'next/script'
import { Entry, EntryCollection, RichTextContent } from "contentful";
import jsPDF from "jspdf";



interface Content {
  sections: EntryCollection<Sections>
}
const NAVIGATION_MAPPING = {
  jobs: "Work history",
  aboutme: "About me"
}

type NavMappingKey = keyof typeof NAVIGATION_MAPPING;

const Home: NextPage<Content> = ({ sections }) => {


  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="personal home page" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P5342HRQQJ"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P5342HRQQJ');
            `,
          }}
        />
      </Head>
      <main className={styles.main}>
        <header>

          <nav>
            {
              sections.items[0].fields.section.map(({ fields: { name } }) => (
                <a href={`#${name}`} >{NAVIGATION_MAPPING[name as NavMappingKey]}</a>
              ))
            }
          </nav>
        </header>

        {
          sections.items[0].fields.section.map(({ fields: { name, title, description, article } }) => {
            return (
              <Section data={{ name, title, description, article }} />
            )
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
  data: {
    name: string;
    title?: string;
    description?: RichTextContent;
    article?: Entry<undefined>[] | Entry<JobType>[]
  }
}

const Section: FC<SectionProps> = ({ data: { name, title, description, article } }) => {

  return (<section id={name}>
    <article>
      {name === 'aboutme' ?
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

export const getStaticProps = async () => {
  const sections = await fetchSectionsEntries();

  return {
    props: {
      sections,
    },
  };
};

export default Home;
