import ScrollReveal from "scrollreveal";
const useScrollReveal = (node) => {
  const srConfig = {
    duration: 500,
    delay: 150,
    scale: 1,
    easing: "ease-in",
    origin:"top"
  };
  ScrollReveal().reveal(node, srConfig);
};

export default useScrollReveal;
