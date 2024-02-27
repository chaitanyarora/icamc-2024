import { advisoryBoard, guidelines } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import Manuscript from "../assets/manuscript.pdf";
import Flyer from "../assets/flyer.pdf";

const Guidelines = () => (<>
    <section id="about" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Guidelines
            </h2>
            <p className={`${styles.paragraph} mt-5`}>All papers must be original and not simultaneously submitted to another journal or conference. The following paper categories are welcome:</p>

            <p className={`${styles.paragraph} mt-5`}>
                <ul className="text-white list-disc">
                    <li>
                        {guidelines[0].content}
                    </li>
                    <li>
                        All the manuscripts must adhere to Author guidelines available at <a download="" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={Manuscript}>click here</a>
                    </li>
                    <li>
                        {guidelines[2].content}
                    </li>
                </ul>
            </p>

            <p className={`${styles.paragraph} mt-5`}>
                <a href={Flyer} download="">
                    <Button buttonText="Download Conference Brochure" />
                </a>
            </p>

        </div>

    </section>
    <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            Paper Submission Link
        </h2>
        <p className={`${styles.paragraph} text-justify mt-5`}>
            <Button buttonText="Submit The Paper" buttonLink="https://cmt3.research.microsoft.com/ICAMC2024/Submission/Index" />
        </p>
    </div> </>
);

export default Guidelines;

// {stats.map((stat) => (
//     <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
//       <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
//         {stat.value}
//       </h4>
//       <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
//         {stat.title}
//       </p>
//     </div>
//   ))}