import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = buttonCategory => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter(item => {
      const ZZZ = item.category.find(myItem => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main id="projects" className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}>
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}>
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}>
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}>
          Bootstrap
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}>
          React & MUI
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map(item => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card">
                <img width={400} height={200} src={item.imgPath} alt="" />

                <div
                  style={{ lineHeight: 1.3 }}
                  className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectDesc}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        target="blank"
                        href={item.demoLink}>
                        <div className="icon-link"></div>
                      </a>
                      <a
                        target="blank"
                        href={item.repoLink}>
                        <div className="icon-github"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
