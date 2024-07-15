import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import ReactPlayer from "react-player";

function ProjectNativeCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
  video,
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dpqa0z1g9",
    },
  });
  return (
    <motion.div
      variants={window.innerWidth <= 600 ? false : fadeIn("up", "spring")}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-360px w-full mt-20"
      >
        <div className="relative w-[240px] h-[500px]  ">
          <button
            className="relative group"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <AdvancedImage
              className="w-[300px] h-auto z-20 relative group-hover:opacity-0 transition-none duration-300 rounded-md"
              width={300}
              height={200}
              cldImg={cld
                .image(video)
                .setAssetType("video")
                .quality("auto")
                .format("auto:image")}
            />
            <ReactPlayer
              className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100  rounded-md "
              url={`https://res.cloudinary.com/dpqa0z1g9/video/upload/q_auto/f_auto/${video}`}
              width={240}
              height={540}
              playing
              loop
              muted
            />
          </button>
        </div>
        <div className="flex flex-row justify-between w-[240px]">
          <div>
            <div className="mt-10 ">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px] w-[240px]">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 w-[240px]">
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
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectNativeCard;
