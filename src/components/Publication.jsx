import { publication } from '../constants';
import styles, { layout } from "../style";


const Publication = () => (
    
        <section id="publication" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Publication
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    {publication[0].content}
                </p>
            </div>
        </section>
    
)

export default Publication