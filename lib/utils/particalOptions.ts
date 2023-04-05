export const particalOptions: any = {
    fps_limit: 120,
    interactivity: {
      detect_on: "canvas",
      events: {
        onDiv: {
          selectors: "#repulse-div",
          enable: true,
          mode: "repulse",
          type: "circle",
        },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 5 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: true, opacity_min: 0.3, speed: 1, sync: false },
        random: false,
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        anim: { enable: true, size_min: 0.1, speed: 4, sync: false },
        random: true,
        value: 3,
      },
    },
    retina_detect: true,
  }