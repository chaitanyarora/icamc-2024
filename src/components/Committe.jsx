import { committe } from '../constants';
import styles, { layout } from "../style";

const FeatureCard = ({ index, name, position, institution }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== committe.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {name}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {institution}
      </p>
      {/* <p className="font-poppins font-normal text-white text-[13px] leading-[24px]">{position}</p> */}
    </div>
  </div>
);

const Committe = () => (

  <section id="committe" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Committee
      </h2>
      
      <p className={`${styles.paragraph} mt-5 flex flex-col flex-wrap`}>
        {committe.map((c, index) => (
          <>
          <h3 className={styles.heading3}>{c.position}</h3>
            {c.names.map((c1, index) => (  
              <FeatureCard key={c1.id} {...c1} index={index} />
            ))}
          </>
        ))}
      </p>
    </div>
  </section>

)

export default Committe

// {committe.map((c, index) => (
//   if (c.position === "ChiefPatron") {
//     <>
//     <h3 className={styles.heading3}>{c.position}</h3>
//     <FeatureCard key={c.id} {...c} index={index} />
//     </>
//   }
//   else if (c.position === "Patron") {
//     <FeatureCard key={c.id} {...c} index={index} />
//   }
// ))}