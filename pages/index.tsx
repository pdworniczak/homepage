
import type { NextPage } from "next";
import Head from "next/head";
import { Job } from "../components/job";
import { Sections, fetchSectionsEntries } from "../contentful";
import styles from "../styles/Home.module.scss";
import Script from 'next/script'
import { useState } from "react";
import { Entry, EntryCollection } from "contentful";

interface Content {
  sections: EntryCollection<Sections>
}

const Home: NextPage<Content> = ({ sections }) => {

  const [sectionID, setSectionID] = useState(0)

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
        <nav>
          <a href="#aboutme">aboutme</a>
          <a href="#jobs">jobs</a>
        </nav>

        {
          sections.items[0].fields.section.map(({ fields: { name, title, description, article } }) => {
            return (<section id={name}>
              <h2>{title}</h2>
              {description?.content?.map(({ content }) => content ? content[0].value : "")}
              {article?.map(({ fields: job }) => { return job ? <Job job={job} /> : null })}

            </section>)
          })
        }

        <footer></footer>
      </main></>
  );
};

export const getStaticProps = async () => {
  const sections = await fetchSectionsEntries();

  return {
    props: {
      sections,
    },
  };
};

export default Home;
