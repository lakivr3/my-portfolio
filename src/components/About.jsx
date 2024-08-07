import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

export const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={
          window.innerWidth <= 600
            ? false
            : fadeIn("right", "spring", 0.5 * index, 0.75)
        }
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={window.innerWidth <= 600 ? false : textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overiview</h2>
      </motion.div>
      <motion.p
        variants={window.innerWidth <= 600 ? false : fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Passionate and dedicated frontend developer with a keen eye for detail
        and a strong commitment to delivering high-quality user experiences. I
        strive to create visually appealing and responsive websites and mobile
        applications that engage and delight users. Constantly seeking
        opportunities to learn and grow in the ever-evolving field of both
        frontend and mobile development.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
