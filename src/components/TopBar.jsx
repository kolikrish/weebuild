"use client";
import "../styles/TopBar.scss";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import AnimatedButton from "./AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: "Blueprints", href: "/blueprints" },
  { label: "Spaces", href: "/spaces" },
  { label: "Sample Space", href: "/sample-space" },
  { label: "Studio", href: "/studio" },
];

const TopBar = () => {
  const topBarRef = useRef(null);
  const { navigateWithTransition } = useViewTransition();
  const pathname = usePathname();
  const lastScrollYRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const topBar = topBarRef.current;
    if (!topBar) return;

    const topBarHeight = topBar.offsetHeight;
    gsap.set(topBar, { y: 0 });

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      isScrollingRef.current = true;
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollYRef.current ? 1 : -1;

      if (direction === 1 && currentScrollY > 60) {
        gsap.to(topBar, {
          y: -(topBarHeight + 20),
          duration: 0.8,
          ease: "power4.out",
        });
      } else if (direction === -1) {
        gsap.to(topBar, {
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        });
      }

      lastScrollYRef.current = currentScrollY;

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ensure navbar is revealed whenever the route changes
  useEffect(() => {
    if (topBarRef.current) {
      gsap.to(topBarRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  }, [pathname]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (pathname === href) return;
    navigateWithTransition(href);
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      navigateWithTransition("/studio");
    }
  };

  return (
    <header className="top-bar" ref={topBarRef}>
      <div className="top-bar-logo">
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          aria-label="WeeBuild Homepage"
        >
          <img src="/logos/WeeBuild..png" alt="WeeBuild." />
        </a>
      </div>

      <nav className="top-bar-links" aria-label="Main Navigation">
        <ul className="nav-list">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="top-bar-cta">
        <AnimatedButton
          label="Connect"
          route="/"
          animate={false}
          onClick={handleConnectClick}
        />
      </div>
    </header>
  );
};

export default TopBar;
