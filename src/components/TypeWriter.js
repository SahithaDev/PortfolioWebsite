import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "React & JavaScript",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "",
        1000,
        "Full Stack Development",
        1000,
        "Artificial Intelligence",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypeWriter;
