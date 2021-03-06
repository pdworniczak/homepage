import { ContentTypeCollection, EntryCollection } from "contentful";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Jobs } from "../components/jobs";
import { fetchJobEntries, Job } from "../contentful";
import styles from "../styles/Home.module.scss";

interface Content {
  header: string;
  aboutme: string;
  jobs: EntryCollection<Job>;
}

const Home: NextPage<Content> = ({ header, jobs, aboutme }) => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="personal home page" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P5342HRQQJ"
        ></script>
        <script
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

      <article className={styles.paper}>
        <header>
          <h1>{header}</h1>
        </header>
        <section>{aboutme}</section>
        <section className={styles.jobs}>
          <header>
            <h2>Jobs</h2>
          </header>
          {jobs.items
            .sort((a, b) =>
              a.fields.startDate > b.fields.startDate
                ? -1
                : a.fields.startDate < b.fields.startDate
                ? 1
                : 0
            )
            .map((job, index) => (
              <Jobs job={job.fields} key={index} />
            ))}
        </section>
      </article>

      <footer></footer>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Content> = async () => {
  const jobs = await fetchJobEntries();

  return {
    props: {
      header: "Homepage",
      aboutme:
        "Hi! Welcome to my personal page. My name is Paweł and I'm a developer for around 11years. \
        During my career, I had opportunity to work with many different technologies. I have started \
        my journey with Java, but after a few years I have switched to JavaScript and currently, \
        I'm mainly working with Typescript and from time to time with Python. I would like to learn Go \
        and/or Rust and currently, I'm trying to do that in my free time. I have quite vast experience \
        in different development domains, from the backend in Java and JS/TS by scripting with Python. \
        Currently, I'm mainly focusing on frontend with React. You could find more details about my \
        career below in the \"jobs\" section. Thank you for visiting my personal website. \
        PS. It's super ugly for now, but It should improve over the time.",
      jobs,
    },
  };
};

export default Home;
