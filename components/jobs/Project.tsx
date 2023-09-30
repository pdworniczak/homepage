import { Project as ProjectType } from "../../contentful";
import styles from "./jobs.module.scss";

export const Project = ({ project }: { project: ProjectType }) => {
    return <article className={styles.title}>
        <header>
            {project.name}
        </header>
        <section>
            {project.description}
        </section>
        <section>
            <header>Tools and technologies:</header>{(project.technologies ? project.technologies.map(technology => <span>{technology} </span>) : '')} {(project.tools ? project.tools.map(tool => <span>{tool} </span>) : '')}
        </section>
    </article>
}