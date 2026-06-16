import React from 'react';
import Card from '../Card/Card';
import pc from "../../assets/img3.jpg";
import pd from "../../assets/img2.jpg";
import pe from "../../assets/img1.jpg";
import pf from "../../assets/img2.jpg";
import pg from "../../assets/img1.jpg";
import "./Projects.css";
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para", 
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider", 
        scroll:"body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      }
    });
  }, []); 

  return (
    <div id="Projects">
      <h1 id="para">PROJECTS</h1>
      <div className="slider">
        <Card title="Web Vulnerability Scanner" image={pc}
         desc="A cybersecurity tool that scans websites for common vulnerabilities." 
         tech="Python • Flask • Security Libraries"/>
        <Card
        title="Crop Advisory System"
        image={pd}
        desc="AI-powered platform for crop recommendations, weather insights, and disease detection."
        tech="Python • Flask • MySQL"/>
        <Card title="College Recommendation System" image={pd}
        desc="A smart recommendation platform for students seeking suitable colleges."
        tech="Python • Machine Learning • Flask"/>
        <Card title="AR/VR Project" image={pe} 
        desc="An immersive augmented and virtual reality experience."
        tech="Unity • C# • VR Headsets"/>
        <Card title="Personal Portfolio" image={pe} 
        desc="A personal portfolio website showcasing my skills and projects."
        tech="React • JavaScript • CSS"/>
        <Card title="Ayodhya 'The Saryu Teere'" image={pf} 
        desc="A cultural project dedicated to the preservation of Ayodhya's heritage."
        tech="PHP • MySQL"/>
        <Card title="Smart Local Bussiness Booster" image={pg} 
        desc="A platform to help local businesses grow and reach more customers."
        tech="GoDaddy AiroBuilder"/>
      </div>
    </div>
  );
}

export default Projects;
