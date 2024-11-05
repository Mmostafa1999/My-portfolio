import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useRef } from "react";
// @ts-ignore
import devAnimation from "../../animation/dev.json";
import "./hero.css";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="about" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="../../../public/mahmoud-dardier.png"
            className="avatar"
            alt="Mahmoud Mustafa Dardier"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title">
          Greetings! I&apos;m A Passionate Frontend Developer
        </motion.h1>

        <p className="sub-title">
          I&apos;m Mahmoud Dardier deeply passionate about frontend development,
          specializing in React.js. Over the past year, I&apos;ve improve my
          skills in creating powerful and engaging user interfaces that not only
          look great but also function seamlessly. My focus is on turning
          intricate designs and business needs into user-friendly web
          applications that are both efficient and scalable.
        </p>

        <div className="all-icons flex">
          <div className="flex links">
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=61567371478272&mibextid=JRoKGi">
              <div className="icon icon-facebook2"></div>
            </a>
            <a target="blank" href="https://github.com/Mmostafa1999">
              <div className="icon icon-github"></div>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/mahmoud-dardier-642434188/">
              <div className="icon icon-linkedin"></div>
            </a>
          </div>

          <div>
            <a href="../../../public/MmustafaCv.pdf" target="blank">
              <button className="hero-btn">Download CV</button>
            </a>
          </div>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
