"use client";
import "./spaces.scss";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "@/components/Nav";
import ConditionalFooter from "@/components/ConditionalFooter";
import Copy from "@/components/Copy";
import { useViewTransition } from "@/hooks/useViewTransition";

gsap.registerPlugin(ScrollTrigger);

const spacesData = [
  {
    id: 1,
    categories: ["Retreat", "Wellness"],
    image: "/spaces/space-1.jpg",
    date: "June 10, 2021",
    name: "Desert Poolhouse",
    location: "Greece, Athens",
    clientImage: "/spaces/client-1.jpeg",
    clientName: "Marina Li",
    route: "/sample-space",
  },
  {
    id: 2,
    categories: ["Home", "Cultural"],
    image: "/spaces/space-2.jpg",
    date: "May 15, 2021",
    name: "Sanctum Hall",
    location: "Morocco, Marrakesh",
    clientImage: "/spaces/client-2.jpeg",
    clientName: "Alex Chen",
    route: "/sample-space",
  },
  {
    id: 3,
    categories: ["Home", "Gallery"],
    image: "/spaces/space-3.jpg",
    date: "April 22, 2021",
    name: "Arcade Residence",
    location: "Portugal, Lisbon",
    clientImage: "/spaces/client-3.jpeg",
    clientName: "Sophia Rodriguez",
    route: "/sample-space",
  },
  {
    id: 4,
    categories: ["Gallery", "Cultural"],
    image: "/spaces/space-4.jpg",
    date: "March 8, 2021",
    name: "Atrium Gallery",
    location: "Austria, Vienna",
    clientImage: "/spaces/client-4.jpeg",
    clientName: "David Kim",
    route: "/sample-space",
  },
  {
    id: 5,
    categories: ["Home", "Retreat"],
    image: "/spaces/space-5.jpg",
    date: "February 14, 2021",
    name: "Mountain Retreat",
    location: "Switzerland, Zurich",
    clientImage: "/spaces/client-5.jpeg",
    clientName: "Emma Wilson",
    route: "/sample-space",
  },
  {
    id: 6,
    categories: ["Cultural", "Home"],
    image: "/spaces/space-6.jpg",
    date: "January 30, 2021",
    name: "Horizon Pavilion",
    location: "Japan, Kyoto",
    clientImage: "/spaces/client-6.jpeg",
    clientName: "Aiko Tanaka",
    route: "/sample-space",
  },
  {
    id: 7,
    categories: ["Wellness", "Retreat", "Gallery"],
    image: "/spaces/space-7.jpg",
    date: "December 12, 2020",
    name: "Lumen Spa",
    location: "UAE, Dubai",
    clientImage: "/spaces/client-7.jpeg",
    clientName: "Omar Rahman",
    route: "/sample-space",
  },
];


const page = () => {
  const spacesRef = useRef(null);
  const scrollTriggerInstances = useRef([]);
  const { navigateWithTransition } = useViewTransition();

  const cleanupScrollTriggers = () => {
    scrollTriggerInstances.current.forEach((instance) => {
      if (instance) instance.kill();
    });
    scrollTriggerInstances.current = [];
  };

  const setupAnimations = () => {
    cleanupScrollTriggers();

    if (!spacesRef.current) return;

    const spaces = spacesRef.current.querySelectorAll(".space");
    if (spaces.length === 0) return;

    spaces.forEach((space, index) => {
      gsap.set(space, {
        opacity: 0,
        scale: 0.75,
        y: 150,
      });

      if (index === 0) {
        gsap.to(space, {
          duration: 0.75,
          y: 0,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          delay: 1.4,
        });
      } else {
        const trigger = ScrollTrigger.create({
          trigger: space,
          start: "top 100%",
          onEnter: () => {
            gsap.to(space, {
              duration: 0.75,
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "power3.out",
            });
          },
        });

        scrollTriggerInstances.current.push(trigger);
      }
    });

    ScrollTrigger.refresh();
  };

  useEffect(() => {
    setupAnimations();

    const handleResize = () => {
      setupAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cleanupScrollTriggers();
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="page spaces">
        <section className="spaces-header">
          <div className="container">
            <div className="prop-col"></div>
            <div className="prop-col">
              <Copy delay={1}>
                <h1>Timeless Spaces</h1>
              </Copy>
              <div className="prop-filters">
                <div className="filter default">
                  <Copy delay={1}>
                    <p className="lg">All</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.1}>
                    <p className="lg">Residential</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.2}>
                    <p className="lg">Commercial</p>
                  </Copy>
                </div>
                <div className="filter">
                  <Copy delay={1.3}>
                    <p className="lg">Hospitality</p>
                  </Copy>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="spaces-list">
          <div className="container" ref={spacesRef}>
            {spacesData.map((space, index) => (
              <a
                key={space.id}
                href={space.route}
                className="space"
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithTransition(space.route);
                }}
              >
                <div className="space-img">
                  <img src={space.image} alt={space.name} />
                </div>
                <div className="space-info">
                  <div className="prop-info-col">
                    <div className="prop-date">
                      <p>{space.date}</p>
                    </div>
                  </div>
                  <div className="prop-info-col">
                    <div className="prop-info-sub-col">
                      <div className="prop-name">
                        <h3>{space.name}</h3>
                        <p className="lg">{space.location}</p>
                      </div>
                    </div>
                    <div className="prop-info-sub-col">
                      <div className="prop-client">
                        <div className="prop-client-img">
                          <img src={space.clientImage} alt={space.clientName} />
                        </div>
                        <div className="prop-client-name">
                          <p>{space.clientName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
