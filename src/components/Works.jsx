import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, reactnative } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Works.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import ReactPlayer from "react-player";
import ProjectNativeCard from "./ProjectNativeCard";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dpqa0z1g9",
  },
});

const shouldUseVariants = () => window.innerWidth >= 1380;

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
  link,
  video,
}) => {
  const motionProps = shouldUseVariants()
    ? { variants: fadeIn("up", "spring", index * 0.5, 0.75) }
    : {};

  return (
    <div {...motionProps}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl"
      >
        <div className="works relative group overflow-hidden">
          <button
            className="relative group w-full h-full"
            onClick={() => window.open(link, "_blank")}
          >
            <AdvancedImage
              className="absolute inset-0 w-full h-full object-cover z-20 transition-opacity duration-300 rounded-md group-hover:opacity-0 "
              cldImg={cld
                .image(video)
                .setAssetType("video")
                .quality("auto")
                .format("auto:image")}
            />
            <ReactPlayer
              className="absolute pr-10 inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 rounded-md group-hover:opacity-100"
              url={`https://res.cloudinary.com/dpqa0z1g9/video/upload/e_preview:duration_10.0/q_auto/f_auto/${video}`}
              width="110%"
              height="110%"
              playing
              loop
              muted
            />
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-between mt-5">
          <div className="w-[85%]">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] w-[320px]">
              {description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[14px] ${tag.color} cursor-pointer`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <div className="inset-0 flex mt-10 card-img_hover gap-2 w-[70%]">
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
    </div>
  );
};

const Works = () => {
  const motionProps = shouldUseVariants() ? { variants: textVariant() } : {};

  return (
    <>
      <div {...motionProps} className="w-full">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Frontend projects</h2>
      </div>
      <div className="w-full flex">
        <p
          {...(shouldUseVariants() ? { variants: fadeIn("", "", 0.1, 1) } : {})}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here you can check out some of my recent React and Next.js projects.
        </p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
        <div
          {...(shouldUseVariants() ? { variants: fadeIn("", "", 0.1, 1) } : {})}
          className="flex flex-col"
        >
          <h2
            {...(shouldUseVariants()
              ? { variants: fadeIn("", "", 0.1, 1) }
              : {})}
            className={`${styles.sectionHeadText} mt-10 flex`}
          >
            React Native projects
          </h2>
          <p
            {...(shouldUseVariants()
              ? { variants: fadeIn("", "", 0.1, 1) }
              : {})}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-left"
          >
            Here you can check out some of my recent React Native projects.
          </p>

          <div className="flex flex-wrap  gap-7 ">
            {reactnative.map((native, index) => (
              <div
                key={`project-${index}`}
                className={`${
                  native.video === "chain4.mp4"
                    ? "max-w-[500px]"
                    : "max-w-[280px]"
                } w-full `}
                {...(shouldUseVariants()
                  ? { variants: fadeIn("", "", 0.1, 1) }
                  : {})}
              >
                <ProjectNativeCard {...native} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
