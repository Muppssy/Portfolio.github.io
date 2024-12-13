import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

document.addEventListener("DOMContentLoaded", () => {
  // Vérification et enregistrement de GSAP et ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initialisation de Lenis pour le défilement fluide
  const lenis = new Lenis({
    duration: 0.7, // Durée du défilement (ajustable)
    easing: (t) => 1 - Math.pow(1 - t, 3), // Fonction d'easing pour un défilement fluide
    smoothWheel: true,
    smoothTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Fonction pour gérer le défilement fluide sur les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        lenis.scrollTo(targetElement, {
          offset: 0,
          duration: 1.2,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }
    });
  });

  // Animation du menu latéral au défilement
  gsap.to(".lat-menu", {
    opacity: 1,
    x: "-50%",
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "body",
      start: "top+=0 top",
      end: "top+=100 top",
      toggleActions: "play none none reverse",
      scrub: true
    }
  });

  // Fonctions d'animation
  const animateDesktop = (element, xPercentStart, yStart, triggerElement, delay = 0) => {
    if (!element) return;
    gsap.set(element, {
      xPercent: xPercentStart,
      y: yStart,
      opacity: 0,
    });
    gsap.to(element, {
      xPercent: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top bottom",   // L’animation commence lorsque l’élément atteint le bas de l'écran
        end: "top top",        // L’animation se termine lorsque l'élément atteint le haut de l'écran
        scrub: true,
      },
    });
  };
  
  const animateMobile = (element, yStart, triggerElement, delay = 0) => {
    if (!element) return;
    gsap.set(element, {
      y: yStart,
      opacity: 0,
    });
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerElement,
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none none",
      },
    });
  };

  // Sélection et animation des éléments
  const titleProject = document.querySelector(".title_project");
  const subtextProject = document.querySelector(".subtext_project");
  const frontProject = document.querySelector(".front_project");
  const backProject = document.querySelector(".back_project");
  const bddProject = document.querySelector(".bdd_project");
  const slideProject = document.querySelector(".slide_project");
  const cardFront = document.querySelector(".front-expert");
  const cardBack = document.querySelector(".back-expert");
  const cardOther = document.querySelector(".other-expert");
  const contactInfo = document.querySelector(".contact-info");
  const contactImg = document.querySelector(".contact-img");

  if (window.innerWidth >= 1024) {
    animateDesktop(titleProject, -100, 100, "#project", 0);
    animateDesktop(subtextProject, -100, 100, "#project", 0.2);
    animateDesktop(frontProject, -100, 100, "#project", 0.4);
    animateDesktop(backProject, -100, 100, "#project", 0.6);
    animateDesktop(bddProject, -100, 100, "#project", 0.8);
    animateDesktop(slideProject, 100, 100, "#project");
    animateDesktop(cardFront, -100, 100, "#expertise");
    animateDesktop(cardBack, 0, 100, "#expertise");
    animateDesktop(cardOther, 100, 100, "#expertise");
    animateDesktop(contactInfo, -100, 100, "#contact");
    animateDesktop(contactImg, 100, 100, "#contact");
  } else {
    const yOffset = 50;
    animateMobile(titleProject, yOffset, "#project", 0);
    animateMobile(subtextProject, yOffset, "#project", 0.2);
    animateMobile(frontProject, yOffset, "#project", 0.4);
    animateMobile(backProject, yOffset, "#project", 0.6);
    animateMobile(bddProject, yOffset, "#project", 0.8);
    animateMobile(slideProject, yOffset, "#project");
    animateMobile(cardFront, yOffset, "#expertise");
    animateMobile(cardBack, yOffset, "#expertise");
    animateMobile(cardOther, yOffset, "#expertise");
    animateMobile(contactInfo, yOffset, "#contact");
    animateMobile(contactImg, yOffset, "#contact");
  }

 
  
  
});
