import Fade from "../../utils/Fade";
export default function Footer() {
  return (
    <Fade
      type="footer"
      mb={-50}
      delay={1000}
      className="bg-light-white bg-opacity-60 backdrop-filter backdrop-blur-lg py-1 md:py-2"
    >
      <p className="text-center font-medium text-light-blue text-sm md:text-lg">
        made with luv © 2021
      </p>
    </Fade>
  );
}
