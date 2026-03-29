import { gsap } from "gsap"

export function runDemoAnimation() {

  const tl = gsap.timeline()

  tl.to(".demo-header", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  })

  tl.to(".panel-raw", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")

  tl.fromTo(".scan-line",
    { left: "0%", opacity: 1 },
    {
      left: "100%",
      duration: 1.2,
      ease: "power1.inOut"
    }
  )

  tl.to(".mask-overlay", {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: "power1.inOut"
  }, "<")

  tl.to(".panel-mask", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5")

  tl.to(".demo-stat-card", {
    opacity: 1,
    y: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out"
  })

}