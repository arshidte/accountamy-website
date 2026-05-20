import useScrollAnimation from "../hooks/useScrollAnimation";

const AnimateOnScroll = ({ children, delay = 0, style = {} }) => {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className="animate-on-scroll" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
