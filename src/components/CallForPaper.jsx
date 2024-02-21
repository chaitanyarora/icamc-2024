import { callForPaper } from '../constants';
import styles, { layout } from "../style";


const CallForPaper = () => (
    
        <section id="callForPaper" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Call For Paper
                </h2>
                <p className={`${styles.paragraph} text-justify mt-5`}>
                    {callForPaper[0].content}
                </p>
            </div>
        </section>
    
)

export default CallForPaper