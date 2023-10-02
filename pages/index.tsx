import { Entry } from "contentful";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Jobs } from "../components/jobs";
import { fetchJobEntries, Job } from "../contentful";
import styles from "../styles/Home.module.scss";
import dayjs from 'dayjs'
import Script from 'next/script'

interface Content {
  header: string;
  aboutme: string;
  jobs: Array<Entry<Job>>;
}

const Home: NextPage<Content> = ({ header, jobs, aboutme }) => {
  return (
    <main className={styles.main}>
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

      <article className={styles.paper}>
        <header>
          <h1>{header}</h1>
        </header>
        <section>{aboutme}</section>
        <section className={styles.jobs}>
          <header>
            <h2>Jobs</h2>
          </header>
          {jobs.map((job, index) => (
            <Jobs job={job.fields} key={index} />
          ))}
        </section>
      </article>

      <footer></footer>
    </main>
  );
};

export const getStaticProps: GetStaticProps<Content> = async () => {
  const { items: jobs } = await fetchJobEntries();
  const sortedJobs = jobs.sort((a, b) =>
    a.fields.startDate > b.fields.startDate
      ? -1
      : a.fields.startDate < b.fields.startDate
        ? 1
        : 0
  )
  const firstJobStartAt = dayjs(Math.min(...jobs.map(job => dayjs(job.fields.startDate).valueOf())))


  return {
    props: {
      header: "Homepage",
      aboutme:
        `Hi! Welcome to my personal page. My name is Paweł and I'm a developer for around ${dayjs().diff(firstJobStartAt, 'years')} years. \
        During my career, I had opportunity to work with many different technologies. I have started \
        my journey with Java, but after a few years I have switched to JavaScript and currently, \
        I'm mainly working with Typescript and from time to time with Python. I would like to learn Go \
        and/or Rust and currently, I'm trying to do that in my free time. I have quite vast experience \
        in different development domains, from the backend in Java and JS/TS by scripting with Python. \
        Currently, I'm mainly focusing on frontend with React. You could find more details about my \
        career below in the \"jobs\" section. Thank you for visiting my personal website. \
        PS. It's super ugly for now, but It should improve over the time.`,
      jobs: sortedJobs,
    },
  };
};

export default Home;
