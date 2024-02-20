import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const About = () =>  (
  <section id="about" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
      HMRITM is going to organize an “International Conference on Emerging Applications of Artificial Intelligence, Machine Learning and Cybersecurity” (ICAMC-2024) in the month of May 2024. 

ICAMC 2024 is the premier single-track conference for reporting advances in all AI, ML and CS aspects, including theory, tools, applications, systems, test-beds and field deployments. The conferences focuses on the core science to develop fundamental principles that underpin the integration of intelligence, as well as on the development of technologies, tools, architectures and infrastructure for building a systems, highlighting the design, implementation, and investigation of system. Application domains include (but are not limited to): transportation, energy, water, agriculture, medical and assistive technology, sensor and social networks, robotics, smart cities, ecology, and supply-chains. Among the relevant research areas are security, control, optimization, machine learning, game theory, mechanism design, mobile and cloud computing, model-based design, verification, data mining / analytics, signal processing, and human-in-the-loop shared or supervisory control. The scope of ICAMC 2024 is to provide an international forum to promote, enhance and stimulate international research interactions and collaboration in the fields of Computer Science, Electronics, Electrical, Healthcare, Information Technology & Management. It will facilitate to promote the exchange of ideas among interested researchers, students, industrialist, developers and practitioners. This conference will also feature plenary talks, workshops, and parallel technical sessions. Selected papers will be published in prestigious book series with ISBN number or Scopus indexed journals* or UGC journals.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    {/* <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div> */}
  </section>
);

export default About;
