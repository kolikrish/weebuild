"use client";
import "../styles/FeaturedProjects.scss";

import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const featuredProjectsContent = [
  {
    info: "An immersive lounge built around a central tree",
    title: "Sanctum Hall",
    description:
      "Circular seating, arched openings, and natural textures create a serene gathering space. The design balances monumentality with intimacy, framing nature as the focal point.",
    image: "/featured-projects/featured-work-1.jpg",
  },
  {
    info: "A private retreat defined by water and sun",
    title: "Desert Poolhouse",
    description:
      "Soft stucco walls, a lone palm, and an open sky bring elemental simplicity. The still surface of the pool becomes both mirror and threshold, blurring enclosure and openness.",
    image: "/featured-projects/featured-work-2.jpg",
  },
  {
    info: "A cloister-inspired courtyard with generous arches",
    title: "Arcade Residence",
    description:
      "Rhythmic colonnades and layered seating zones encourage calm gatherings. Textured stone and filtered light evoke both permanence and ease, rooted in classical geometry.",
    image: "/featured-projects/featured-work-3.jpg",
  },
  {
    info: "A refined interior anchored by symmetry and light",
    title: "Atrium Gallery",
    description:
      "A quiet procession of columns and a sculptural centerpiece guide the eye toward framed views. Warm plaster walls and soft daylight create a setting of contemplative elegance.",
    image: "/featured-projects/featured-work-4.jpg",
  },
];


const FeaturedProjects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const featuredProjectCards = gsap.utils.toArray(".featured-project-card");

    featuredProjectCards.forEach((featuredProjectCard, index) => {
      if (index < featuredProjectCards.length - 1) {
        const featuredProjectCardInner = featuredProjectCard.querySelector(
          ".featured-project-card-inner"
        );

        const isMobile = window.innerWidth <= 1000;

        gsap.fromTo(
          featuredProjectCardInner,
          {
            y: "0%",
            z: 0,
            rotationX: 0,
          },
          {
            y: "-50%",
            z: -250,
            rotationX: 45,
            scrollTrigger: {
              trigger: featuredProjectCards[index + 1],
              start: isMobile ? "top 85%" : "top 100%",
              end: "top -75%",
              scrub: true,
              pin: featuredProjectCard,
              pinSpacing: false,
            },
          }
        );

        gsap.to(featuredProjectCardInner, {
          "--after-opacity": 1,
          scrollTrigger: {
            trigger: featuredProjectCards[index + 1],
            start: "top 75%",
            end: "top 0%",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="featured-projects">
        {featuredProjectsContent.map((project, index) => (
          <div key={index} className="featured-project-card">
            <div className="featured-project-card-inner">
              <div className="featured-project-card-content">
                <div className="featured-project-card-info">
                  <p>{project.info}</p>
                </div>
                <div className="featured-project-card-content-main">
                  <div className="featured-project-card-title">
                    <h2>{project.title}</h2>
                  </div>
                  <div className="featured-project-card-description">
                    <p className="lg">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="featured-project-card-img">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProjects;
