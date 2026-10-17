"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import "../styles/Skiper.scss";

const Skiper = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end end"],
  });

  return (
    <section ref={containerRef} className="skiper-section">
      <div className="skiper-header">
        <div className="skiper-header-backdrop">

          <h2 className="skiper-title">
            The Stroke <br /> That Traces Our <br /> Architectural Path
          </h2>

          <p className="skiper-subtitle">
            Every environment begins with an unbroken gesture — translating light,
            volume, and structural balance into lived experience. Scroll to trace our
            spatial journey.
          </p>

          <div className="skiper-scroll-cue">
            <span className="cue-dot"></span>
            <span className="cue-text">Scroll to follow progress</span>
          </div>
        </div>
      </div>

      <LinePath scrollYProgress={scrollYProgress} />

      <div className="skiper-card">
        <div className="skiper-card-top">
          <div className="skiper-card-meta">
            <span className="studio-badge">Architectural Practice</span>
            <p className="studio-subtext">Designs that inspire, spaces that endure</p>
          </div>
          <h2 className="skiper-card-brand">WeeBuild.</h2>
        </div>

        <div className="skiper-card-grid">
          <div className="skiper-card-col">
            <p className="col-label">Location</p>
            <p className="col-value">
              Gachibowli, Hyderabad <br />
              India & Worldwide
            </p>
          </div>

          <div className="skiper-card-col">
            <p className="col-label">Practice</p>
            <p className="col-value">
              Architecture, Interiors <br />& Digital Environments
            </p>
          </div>

          <div className="skiper-card-col">
            <p className="col-label">Commissions</p>
            <p className="col-value">
              Open for 2025–26 <br />
              teamweebuild@gmail.com
            </p>
          </div>

          <div className="skiper-card-col">
            <p className="col-label">Direct Line</p>
            <p className="col-value">
              +91 8978185880 <br />
              Mon — Fri / 10am — 7pm
            </p>
          </div>
        </div>

        <div className="skiper-card-footer">
          <p className="card-footer-note">
            Crafting sustainable, tactile environments that evolve gracefully over time.
          </p>
          <div className="card-cta">
            <AnimatedButton label="Explore Spaces" route="/spaces" animate={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

const LinePath = ({ scrollYProgress }) => {
  const pathLength = useTransform(scrollYProgress, [0, 0.88], [0, 1]);

  return (
    <div className="skiper-path-container">
      <svg
        width="1278"
        height="2319"
        viewBox="0 0 1278 2319"
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        className="skiper-svg"
      >
        <motion.path
          d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
          stroke="#C2F84F"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            pathLength,
          }}
        />
      </svg>
    </div>
  );
};

export { Skiper, Skiper as Skiper19 };
export default Skiper;
