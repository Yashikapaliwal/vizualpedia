import React, { useEffect } from "react";
import "@/app/skills.css";
import gsap from "gsap";
import Draggable from "gsap/src/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import Image from "next/image";
import AOS from "aos";
gsap.registerPlugin(Draggable, InertiaPlugin);

// import Images of the skills

import botstrap from "../../public/skills/bootstrap.png";
import css from "../../public/skills/css-3.png";
import express from "../../public/skills/expressjs.png";
import fanybox from "../../public/skills/fancybox.png";
import git from "../../public/skills/git.png";
import github from "../../public/skills/github.png";
import greensock from "../../public/skills/gsap-greensock.svg";
import html5 from "../../public/skills/html-5.png";
import javscript from "../../public/skills/java-script.png";
import mongodb from "../../public/skills/mongodb.png";
import nextjs from "../../public/skills/nextjs.png";
import node from "../../public/skills/nodejs.png";
import postman from "../../public/skills/postman.png";
import reactjs from "../../public/skills/reactjs.png";
import shopify from "../../public/skills/shopify.png";
import swiperjs from "../../public/skills/swiperjs.png";
import tailwindcss from "../../public/skills/tailwind.png";
import vscode from "../../public/skills/vscode.png";
import wix from "../../public/skills/wix.png";
import wordpress from "../../public/skills/wordpress.png";

const Skills = () => {
  useEffect(() => {
    AOS.init();

    Draggable.create("#draggable-element", {
      type: "x,y",
      bounds: "#drag-container", // ✅ keeps it inside the container
      inertia: true, // optional: adds momentum feel
      throwProps: true,
    });
  }, []);

  return (
    <div className="main-skill-section" id="home-skills">
        <h3 className="h3-heading">World Biggest Company</h3>
      <div id="drag-container">
        <div id="draggable-element" className="draggable-box">
          <div className="row-div">
            <div className="col-div">
              <Image src={html5} alt="html5" width={400} height={20} />
              <h4>HTML</h4>
            </div>
             <div className="col-div">
              <Image src={css} alt="css" width={400} height={20} />
              <h4>CSS</h4>
            </div>
            <div className="col-div">
              <Image src={javscript} alt="javscript" width={400} height={20} />
              <h4>Javascript</h4>
            </div>
            <div className="col-div">
              <Image src={botstrap} alt="botstrap" width={400} height={20} />
              <h4>Bootstrap</h4>
            </div>
            <div className="col-div">
              <Image
                src={tailwindcss}
                alt="tailwindcss"
                width={400}
                height={20}
              />
              <h4>TailwindCSS</h4>
            </div>
            <div className="col-div">
              <Image src={reactjs} alt="reactjs" width={400} height={20} />
              <h4>ReactJS</h4>
            </div>
            <div className="col-div">
              <Image src={nextjs} alt="nextjs" width={400} height={20} />
              <h4>NextJS</h4>
            </div>
            <div className="col-div">
              <Image src={express} alt="express" width={400} height={20} />
              <h4>ExpressJS</h4>
            </div>
            <div className="col-div">
              <Image src={node} alt="node" width={400} height={20} />
              <h4>NodeJS</h4>
            </div>
            <div className="col-div">
              <Image src={mongodb} alt="mongodb" width={400} height={20} />
              <h4>MongoDB</h4>
            </div>
            <div className="col-div">
              <Image src={postman} alt="postman" width={400} height={20} />
              <h4>POSTMAN</h4>
            </div>
            <div className="col-div">
              <Image src={git} alt="git" width={400} height={20} />
              <h4>GIT</h4>
            </div>
            <div className="col-div">
              <Image src={github} alt="github" width={400} height={20} />
              <h4>Github</h4>
            </div>
            <div className="col-div">
              <Image src={vscode} alt="vscode" width={400} height={20} />
              <h4>vscode</h4>
            </div>
            <div className="col-div">
              <Image
                src={greensock}
                alt="greensock"
                width={400}
                height={20}
                className=""
              />
              <h4>GSAP</h4>
            </div>
            <div className="col-div">
              <Image src={fanybox} alt="fanybox" width={400} height={20} />
              <h4>FancyboxJS</h4>
            </div>
            <div className="col-div">
              <Image src={swiperjs} alt="swiperjs" width={400} height={20} />
              <h4>SwiperJS</h4>
            </div>
            <div className="col-div">
              <Image src={shopify} alt="shopify" width={400} height={20} />
              <h4>Shopify</h4>
            </div>
            <div className="col-div">
              <Image src={wix} alt="wix" width={400} height={20} />
              <h4>Wix Studio</h4>
            </div>
            <div className="col-div">
              <Image src={wordpress} alt="wordpress" width={400} height={20} />
              <h4>Wordpress </h4>
            </div>  
          </div>
          {/* row */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
