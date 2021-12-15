export const options = {
  background: {
    color: "",
  },
  fpsLimit: 50,
  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        area: 1000,
        factor: 1000,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 4,
      },
      value: {
        min: 4,
        max: 8,
      },
    },
    color: {
      value: ["#ffeb31", "#f9aeba"],
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    shape: {
      type: "blossom",
    },
    collisions: {
      overlap: {
        enable: true,
      },
    },
    destroy: {
      mode: "none",
    },
    move: {
      bounce: false,
      direction: "bottom",
      angle: {
        offset: 0,
        angle: 30,
      },
      enable: true,
      random: false,
      straight: false,
    },
    rotate: {
      value: {
        min: 40,
        max: 90,
      },
      animation: {
        enable: true,
        speed: 3.5,
      },
      direction: "random",
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: {
        min: 0.2,
        max: 0.6,
      },
    },
    reduceDuplicates: true,
    zIndex: {
      value: 0,
      opacityRate: 0.5,
      sizeRate: 1,
      velocityRate: 1,
    },
    pauseOnOutsideViewport: true,
  },
};
