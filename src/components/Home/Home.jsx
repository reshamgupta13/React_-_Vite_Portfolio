import React from 'react';
import './Home.css';
import man from '../../assets/R.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", { y: 100, duration: 1, opacity: 0 });
    tl1.from(".line2", { y: 100, duration: 1, opacity: 0 });
    tl1.from(".line3", { y: 80, duration: 1, opacity: 0 });
    gsap.from(".righthome img", { x: 200, duration: 1, opacity: 0 });
  });

  return (
    <div id="Home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Resham Gupta</div>
          <div className="line3">
            <span>
              <Typewriter
                words={['FULL STACK DEVELOPER', 'SOFTWARE DEVELOPER', 'PROBLEM SOLVER']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <a href="/Resume-1.pdf" target="_blank" rel="noopener noreferrer">
            <button>RESUME</button>
          </a>
          <div className="socialLinks">
  <a
    href="https://www.linkedin.com/in/resham-gupta-3a28a1271"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/reshamgupta13"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://leetcode.com/u/reshamgupta_13/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
  >
    <SiLeetcode />
  </a>
</div>
      
<div className="profileStats">
  <span>GitHub Projects</span>
  <span>  •</span>
  <span> LeetCode Problem Solver</span>
</div>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="profile" />
      </div>
    </div>
  );
}


export default Home;
