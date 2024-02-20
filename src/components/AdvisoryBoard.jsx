import { advisoryBoard } from '../constants';
import styles, { layout } from "../style";

const FeatureCard = ({ name, position, institution, country, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== advisoryBoard.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {name}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {position}
            </p>
            <p className="font-poppins font-normal text-white text-[13px] leading-[24px]">{institution} {country}</p>
        </div>
    </div>
);

const AdvisoryBoard = () => (

    <section id="advisoryBoard" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Advisory Board
            </h2>
            <div className={`${layout.sectionImg} flex-col`}>
                {advisoryBoard.map((advisoryB, index) => (
                    <FeatureCard key={advisoryB.id} {...advisoryB} index={index} />
                ))}
            </div>
        </div>


    </section>

)

export default AdvisoryBoard

{/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}