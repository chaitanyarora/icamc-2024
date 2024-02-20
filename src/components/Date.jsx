import { dates } from '../constants';
import styles, { layout } from "../style";


const Date = () => (

    <section id="callForPaper" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Dates of The Conference
            </h2>
            
            {dates.map((d) => (
                <p className={`${styles.paragraph} mt-5`}>
                {d.name}{': '} {d.deadline}
            </p>
            ))}
                
        </div>
    </section>

)

export default Date