import { callForPaper, tracks } from '../constants';
import styles, { layout } from "../style";


const CallForPaper = () => (

    <>
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
        
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Tracks
                </h2>
                <p className={`${styles.paragraph} text-justify mt-5`}>
                    {tracks.map((track, index) => (
                        <>
                        <h3 className={styles.heading3}>Track {track.id}: {track.name}</h3>
                        <ul className="text-white list-disc">
                        {track.list.map((t, index) => (
                            <li id={index}>{t}</li>
                            ))}
                        </ul>
                        </>
                    ))}
                </p>
            </div>
   
    </>

)

export default CallForPaper