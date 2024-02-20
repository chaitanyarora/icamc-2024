import { guidelines } from "../constants";
import styles, { layout } from "../style";

const Guidelines = () => (
    <section id="guidelines" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Guidelines
            </h2>
            <p className={`${styles.paragraph} mt-5`}>
                {guidelines.map((guide) => (
                    <li key={guide.id}>
                        {guide.content}
                    </li>
                ))}
            </p>
        </div>
    </section>
);

export default Guidelines;
