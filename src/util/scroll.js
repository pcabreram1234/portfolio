import ScrollReveal from "scrollreveal";

const srConfig = {
  duration: 1000,
  delay: 150,
  distance: "500px",
  scale: 1,
  easing: "ease-in-out",
};

const sr = (node) => {
  return ScrollReveal().reveal(node, srConfig);
};
export default sr;
