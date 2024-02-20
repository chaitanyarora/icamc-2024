import { callForPaper } from '../constants';
import styles, { layout } from "../style";


const Committe = () => (
    
        <section id="committe" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Advisory Board
                </h2>
                <p className={`${styles.paragraph} mt-5`}>
                    {callForPaper[0].content}
                </p>
            </div>
        </section>
    
)

export default Committe