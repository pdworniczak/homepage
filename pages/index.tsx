import type { NextPage } from "next";
import Head from "next/head";
import { fetchHomepageEntry } from "../contentful";
import { SectionEntry } from "../contentful/types";
import styles from "./Home.module.scss";
import Script from "next/script";
import { Footer, Header, Sections } from "../components";

interface Content {
  sections: SectionEntry[];
}

const GTAG_CONFIG = process.env.GTAG_CONFIG;

const Home: NextPage<Content> = ({ sections }) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="personal home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scripts />
      <main className={styles.main}>
        <Header sections={sections} />
        <Sections sections={sections} />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const homepageEntry = await fetchHomepageEntry();

  return {
    props: {
      sections: homepageEntry.items[0].fields.sections,
    },
  };
};

export default Home;


const Scripts = () => (
  <>
    <Script
      id="gtm"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_CONFIG}`}
    />
    <Script
      id="dl"
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${GTAG_CONFIG});
            `,
      }}
    />
  </>
)