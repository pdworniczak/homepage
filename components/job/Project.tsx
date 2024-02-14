import { Project as ProjectType } from "../../contentful";
import styles from "./Job.module.scss";

export const Project = ({ project }: { project: ProjectType }) => {
    return <article className={styles.title}>
        <header>
            {project.name}
        </header>
        <section>
            {project.description}
        </section>
        <section>
            <header>Tools and technologies:</header>{(project.technologies ? project.technologies.map((technology, index) => <span key={`tech_${index}`}>{technology} </span>) : '')} {(project.tools ? project.tools.map((tool, index) => <span key={`tool_${index}`}>{tool} </span>) : '')}
        </section>
    </article>
}