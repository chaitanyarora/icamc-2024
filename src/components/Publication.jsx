import { publication } from "../constants";
import styles, { layout } from "../style";


const Publication = () => (

    <section id="publication" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Publication
            </h2>

            <p className={`${styles.paragraph} text-justify mt-5`}>
                {publication.map((p) => (
                    <li className='' id={p.id}>{p.content}</li>
                ))}
                <li>
                All papers (except pt.1) will be published in AIJR conference proceeding <a download="" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://aijr.org/icamc-2024/">(https://aijr.org/icamc-2024/)</a> with ISBN number/ISSN number with doi number and indexed in major database like crossref, BASE, Google Scholar e.t.c.
                </li>
            </p>
        </div>
    </section>

)

export default Publication