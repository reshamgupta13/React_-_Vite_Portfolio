import React from 'react';
import "./About.css";
import Card from "../Card/Card"; 
import web from "../../assets/img1.jpg";
import java from "../../assets/img2.jpg";
import dsa from "../../assets/img3.jpg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FaUserAlt, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
     gsap.from(".circle", {
  x: -100,
  duration: 1,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".circle",
    scrub: 3,
    start: "top 60%",
    end: "top 30%",
  },
});

      gsap.from(".aboutdetails h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails h1",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
      gsap.from(".aboutdetails ul", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".aboutdetails ul",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
      gsap.from(".rightabout ", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".rightabout",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });

      gsap.from(".line", {
        x: -100,
        duration: 1,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
          trigger: ".line",
          scrub: 2,
          start: "top 60%",
          end: "top 30%",
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div id="About">
      <div className="leftabout">
        <div className="circle-line">
        <div className="circle">
        <FaUserAlt />
        </div>
          <div className="line"></div>
          <div className="circle">
          <FaGraduationCap />
          </div>
          <div className="line"></div>
          <div className="circle">
          <FaLaptopCode />
          </div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span>: RESHAM GUPTA</li>
              <li><span>AGE</span>: 20 YEARS</li>
              <li><span>GENDER</span>: FEMALE</li>
              <li><span>LANGUAGE KNOWN</span>: ENGLISH & HINDI</li>
            </ul>
          </div>

          <div className="EDUCATION">
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE</span>: B.TECH</li>
              <li><span>BRANCH</span>: COMPUTER SCIENCE & ENGINEERING</li>
              <li><span>COLLEGE</span>: GL Bajaj Institute of Technology and Management</li>
              <li><span>GPA</span>: 7.9</li>
            </ul>
          </div>

          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li><span>Languages: </span>Java, Python </li>
              <li><span>Web Technologies: </span>HTML, CSS, Bootstrap, Responsive Design </li>
              <li><span>Tools: </span>GitHub, VS Code, IntelliJ, Eclipse IDE </li>
              <li><span>Database: </span>MySQL </li>
              <li><span>CS Fundamentals: </span>OOPs, DBMS, OS, Cyber Security, SDLC </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title='FULL STACK DEVELOPER' image={web} />
        <Card title='DSA' image={java} />
        <Card title='PROBLEM SOLVER' image={dsa} />
      </div>
    </div>
  );
}

export default About;
