import { styles } from "../style";
import { StarsCanvas } from "./canvas";
import rocket from "../assets/rocket1.png";
import "./Hero.css";
import { githublogo, instagram, linkedin } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto my-10">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#194bd6]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm{" "}
            <span className="text-[#194bd6] animate__backInRight">Lazar</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2  text-white-100 max-w-[750px]`}
          >
            Full-Stack Developer with hands-on experience in web and mobile
            technologies, focused on delivering efficient and user-friendly
            solutions.{" "}
          </p>

          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            Contact me below to work on your ideas!{" "}
          </p>

          <div className="logo">
            <div className="logo__instagram">
              <img
                src={instagram}
                alt=""
                onClick={() =>
                  window.open("https://instagram.com/zltado", "_blank")
                }
              />
            </div>
            <div className="logo__linkedin">
              <img
                src={linkedin}
                alt=""
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lazar-zdravkovic-614b03186/",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="logo__github">
              <img
                src={githublogo}
                alt=""
                onClick={() =>
                  window.open("https://github.com/lakivr3", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>

      <StarsCanvas />
    </section>
  );
};

export default Hero;
