import type { NextPage } from "next";
import Head from "next/head";
import { fetchHomepageEntry, fetchSectionEntries } from "../contentful";
import { TypeSectionSkeleton } from "../contentful/types";
import styles from "../styles/Home.module.scss";
import Script from "next/script";
import { Footer, Header, Sections } from "../components";

interface Content {
  sections: TypeSectionSkeleton[];
}

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
        <Header sections={sections} />
        <Sections sections={sections} />
        <Footer />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const sectionEntries = await fetchSectionEntries();
  const homepageEntry = await fetchHomepageEntry();

  console.log(homepageEntry.items);

  return {
    props: {
      sections: homepageEntry.items[0].fields.sections,
    },
  };
};

export default Home;
