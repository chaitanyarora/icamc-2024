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
            </p>
        </div>
    </section>

)

export default Publication