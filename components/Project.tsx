import { TypeProjectFields, TypeProjectSkeleton } from "../contentful/types";
import styles from "./components.module.scss";

export const Project = ({ project }: { project: TypeProjectFields }) => {
  return (
    <article className={styles.project}>
      <header>
        <h5>{project.name}</h5>
      </header>
      <section>{project.description}</section>
      <section>
        <header>
          <h6>Tools and technologies:</h6>
        </header>
        <span>
          {project.technologies
            ? project.technologies.map((technology, index) => (
                <span key={`tech_${index}`}>{technology}</span>
              ))
            : ""}
          {project.tools
            ? project.tools.map((tool, index) => (
                <span key={`tool_${index}`}>{tool}</span>
              ))
            : ""}
        </span>
      </section>
    </article>
  );
};
