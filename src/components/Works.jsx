import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, reactnative } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import ReactPlayer from "react-player";
import ProjectNativeCard from "./ProjectNativeCard";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dpqa0z1g9",
  },
});

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  video,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-360px w-full"
      >
        <div className="relative w-[500px] h-[240px]  ">
          <button
            className="relative group"
            onClick={() => window.open(link, "_blank")}
          >
            <AdvancedImage
              className="w-full h-auto z-20 relative group-hover:opacity-0 transition-none duration-300 rounded-md"
              width={1080}
              height={1920}
              cldImg={cld
                .image(video)
                .setAssetType("video")
                .quality("auto")
                .format("auto:image")}
            />
            <ReactPlayer
              className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100  rounded-md "
              url={`https://res.cloudinary.com/dpqa0z1g9/video/upload/e_preview:duration_10.0/q_auto/f_auto/${video}`}
              width={500}
              height={270}
              playing
              loop
              muted
            />
          </button>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <div className="mt-10 ">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px] w-[320px]">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => {
                return (
                  <p
                    key={tag.name}
                    className={`text-[14px] ${tag.color} cursor-pointer`}
                  >
                    #{tag.name}
                  </p>
                );
              })}
            </div>
          </div>

          <div className=" inset-0 flex   mt-10 card-img_hover gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="git"
                className="w-1/2 h-1/2 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Frontend projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here you can check out some of my recent React and Next.js projects.
        </motion.p>
      </div>
      <div className="mt-20 flex  flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          );
        })}
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <motion.h2
            variants={fadeIn("", "", 0.1, 1)}
            className={`${styles.sectionHeadText} mt-10 flex`}
          >
            React Native projects
          </motion.h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Here you can check out some of my recent React Native projects.
          </motion.p>

          {reactnative.map((native, index) => {
            return (
              <motion.div
                key={`project-${index}`}
                className="w-[280px]"
                variants={fadeIn("", "", 0.1, 1)}
              >
                <ProjectNativeCard
                  key={`project-${index}`}
                  {...native}
                  index={index}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
