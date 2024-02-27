import styles, { layout } from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex flex-col font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[70px] leading-[45px]">
              2nd International Conference on Emerging Applications of
              <p>
                <span className="text-gradient">Artificial Intelligence, Machine Learning and Cybersecurity</span> 2024
              </p>{" "}
            </h1>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} alt="robot-hand" className="w-[100%] h-[100%] relative z-[5]" />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

      </section>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Paper Submission Link
        </h2>
        <p className={`${styles.paragraph} text-justify mt-5`}>
          <Button buttonText="Submit The Paper" buttonLink="https://cmt3.research.microsoft.com/ICAMC2024/Submission/Index" />
        </p>
      </div>
    </>
  );
};

export default Hero;
