import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import ReactPlayer from "react-player";

function ProjectNativeCard({
  name,
  description,
  tags,
  source_code_link,
  video,
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dpqa0z1g9",
    },
  });

  return (
    <motion.div
      variants={window.innerWidth <= 1400 ? false : fadeIn("up", "spring")}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:max-w-[500px] w-full mt-10"
      >
        <div
          className={`relative ${
            video === "chain4.mp4"
              ? "aspect-w-16 aspect-h-9 max-w-full"
              : "aspect-w-9 aspect-h-16 max-w-full"
          }`}
        >
          <button
            className="relative group"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <AdvancedImage
              className="h-auto z-20 relative group-hover:opacity-0 transition-opacity duration-300 rounded-md"
              width={video === "chain4.mp4" ? 460 : 300}
              height={video === "chain4.mp4" ? 300 : 200}
              cldImg={cld
                .image(video)
                .setAssetType("video")
                .quality("auto")
                .format("auto:image")}
            />
            <ReactPlayer
              className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 rounded-md"
              url={`https://res.cloudinary.com/dpqa0z1g9/video/upload/q_auto/f_auto/${video}`}
              width="100%"
              height="100%"
              playing
              loop
              muted
            />
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px] lg:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[14px] lg:text-[16px]">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[12px] lg:text-[14px] ${tag.color} cursor-pointer`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectNativeCard;
