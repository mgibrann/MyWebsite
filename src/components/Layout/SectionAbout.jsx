import Fade from "../../utils/Fade";

export default function SectionAbout(props) {
  return (
    <Fade
      type="section"
      {...props}
      className={`pt-4 pb-6 ${props.className || ""}`}
    >
      <p className="pb-2 text-xl md:text-2xl lg:text-4xl text-light-blue font-bold text-center border-b border-gray-300">
        {props.title}
      </p>
      {props.children}
    </Fade>
  );
}
