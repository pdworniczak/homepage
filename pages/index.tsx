import { ContentTypeCollection, EntryCollection } from "contentful";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { fetchEntries, Job } from "../contentful";
import styles from "../styles/Home.module.css";

interface Content {
  header: string;
  jobs: EntryCollection<Job>;
}

const Home: NextPage<Content> = ({ header, jobs }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="personal home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{header}</h1>
      </header>

      <main className={styles.main}>
        <section>
          {jobs.items.map((job, index) => (
            <article key={index}>
              {/* <pre>{JSON.stringify(job.fields, null, 2)}</pre> */}
              <header>
                <h2>{job.fields.companyName}</h2>
              </header>
              <article>
                <h3>{job.fields.jobTitle}</h3>
                <div>
                  <span>{job.fields.startDate}</span>
                  <span>{job.fields.endDate}</span>
                </div>
              </article>
              <section>
                {job.fields.projects.map((project, index) => (
                  <article key={index}>{project.fields.name}</article>
                ))}
              </section>
            </article>
          ))}
        </section>
      </main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Content> = async () => {
  const jobs = await fetchEntries();

  return {
    props: {
      header: "Portfolio",
      jobs,
    },
  };
};

export default Home;
