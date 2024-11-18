import { ProjectEntry } from "../contentful/types";
import styles from "./components.module.scss";

export const Project = ({ project: {fields: {name, description, technologies, tools}} }: { project: ProjectEntry }) => {
  return (
    <>
      <article className={styles.project}>
        <header>
          <h5>{name}</h5>
        </header>
        <section>{description}</section>
        <section>
          <header>
            <h6>Tools and technologies:</h6>
          </header>
          <span>
            {technologies
              ? technologies.map((technology, index) => (
                <span key={`tech_${index}`}>{technology}</span>
              ))
              : ""}
            {tools
              ? tools.map((tool, index) => (
                <span key={`tool_${index}`}>{tool}</span>
              ))
              : ""}
          </span>
        </section>
      </article>
      <hr />
    </>
  );
};
