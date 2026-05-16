const demos = {
  finance: {
    label: "Finance system + purchase",
    title: "Credits stay liquid across the network.",
    copy:
      "Users buy flexible packages and spend them anywhere in the marketplace, reducing the pain of paying class-by-class.",
    src: "assets/gifs/finance-system-purchase.gif",
    alt: "BeMore finance and purchase flow"
  },
  ai: {
    label: "AI chatbot",
    title: "AI turns decision fatigue into one useful next step.",
    copy:
      "The copilot routes users by mood, time, location, budget, and real availability, then keeps the lifestyle loop moving.",
    src: "assets/gifs/ai-chatbot.gif",
    alt: "BeMore AI chatbot flow"
  },
  map: {
    label: "Immersive map",
    title: "Nearby options become visible exactly when plans change.",
    copy:
      "Location-based discovery helps users recover from schedule changes instead of abandoning the routine altogether.",
    src: "assets/gifs/map.gif",
    alt: "BeMore map booking flow"
  },
  badges: {
    label: "Achievement engine",
    title: "Progress feels forgiving, visible, and worth returning to.",
    copy:
      "Badges, soft streaks, and passport stamps create motivation without punishing normal life interruptions.",
    src: "assets/gifs/badges.gif",
    alt: "BeMore badges and achievements flow"
  },
  social: {
    label: "Social feed",
    title: "Community makes multi-activity habits easier to sustain.",
    copy:
      "Users can see real experiences from peers, turning exploration into a shared lifestyle signal.",
    src: "assets/gifs/social-feed.gif",
    alt: "BeMore social feed flow"
  }
};

const tabs = document.querySelectorAll(".tab");
const demoLabel = document.querySelector("#demo-label");
const demoTitle = document.querySelector("#demo-title");
const demoCopy = document.querySelector("#demo-copy");
const demoImage = document.querySelector("#demo-image");
const demoFrame = document.querySelector(".demo-frame");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const demo = demos[tab.dataset.demo];
    tabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    demoLabel.textContent = demo.label;
    demoTitle.textContent = demo.title;
    demoCopy.textContent = demo.copy;
    demoImage.src = demo.src;
    demoImage.alt = demo.alt;
    demoFrame.classList.remove("is-switching");
    window.requestAnimationFrame(() => demoFrame.classList.add("is-switching"));
  });
});

demoImage.addEventListener("animationend", () => {
  demoFrame.classList.remove("is-switching");
});

const header = document.querySelector("[data-elevate]");
const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const animatedItems = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    revealObserver.observe(item);
  });
} else {
  animatedItems.forEach((item) => item.classList.add("is-visible"));
}
