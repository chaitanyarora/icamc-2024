import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { features } from "../constants";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-3 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={` h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />

    </div>
    <div className="ml-3">
      <h4 className="align-middle font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
    </div>
  </div>
);

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

     
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
   
    </div> */}

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Date of Conference
      </h2>
      <div className="text-white">
      <p class="text-center">
              <strong>
                Dates of the conference:
              </strong>
              <em>
                May 9-10, 2024
              </em>
            </p>
            <p class="text-center">
              <strong>
                Deadline for submission:
              </strong>
              <em>
                April 07, 2024
              </em>
            </p>

            <p class="text-center">
              <strong>
                Acceptance Notification:
              </strong>
              <em>
                April 15, 2024
              </em>
            </p>

            <p class="text-center">
              <strong>
                Camera Ready Paper:
              </strong>
              <em>
                April 20, 2024
              </em>
            </p>

            <p class="text-center">
              <strong>
                Early Bird Registration:
              </strong>
              <em>
                April 20, 2024
              </em>
            </p>
      </div>
      {/* <p className={`${styles.paragraph}  mt-5`}>
        Prospective authors are invited to contribute high-quality papers by the submission deadline through the online submission system. The submission of a paper implies that the paper is original and has not been submitted under review or is not copyright-protected elsewhere and will be presented by an author if accepted. All submitted papers will be refereed by experts in the field based on the criteria of originality, significance, quality and clarity. The authors of accepted papers will have an opportunity to revise their papers and take consideration of the referees' comments and suggestions. Application domains include (but are not limited to):
      </p> */}

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div> */}
    </div>
  </section>
);

export default Billing;
