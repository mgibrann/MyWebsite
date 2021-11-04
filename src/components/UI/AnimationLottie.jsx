import Lottie from "react-lottie";
import { LoadingSpinner, PageNotFound, Coding } from "../../assets";

const AnimationLottie = ({ loop, autoplay, type, width, height }) => {
  let file = null;
  if (type === "loading") {
    file = LoadingSpinner;
  } else if (type === "404") {
    file = PageNotFound;
  } else if (type === "coding") {
    file = Coding;
  }
  const defaultOptions = {
    loop: loop || true,
    autoplay: autoplay || true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} width={width} height={height} />;
};

export default AnimationLottie;
