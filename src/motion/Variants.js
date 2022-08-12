export const fadeIn = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      staggerChildren: 0.3,
    },
  },
};

export const navMotion = {
  offScreen: {
    y: -30,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const boxAnimation = {
  offScreen: {
    y: 10,
    opacity: 0,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.7,
    },
  },
};

export const loadText = {
  offScreen: {
    opacity: 0,
    y: 20,
  },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.5,
    },
  },
};
