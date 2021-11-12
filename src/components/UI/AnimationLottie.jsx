import Lottie from "react-lottie";
import { LoadingSpinner, PageNotFound, Coding } from "../../assets";

export default function AnimationLottie(props) {
  const { loop, autoplay, type, width, height } = props;
  let file = null;
  if (type === "loading") file = LoadingSpinner;
  else if (type === "404") file = PageNotFound;
  else if (type === "coding") file = Coding;

  const defaultOptions = {
    loop: loop || true,
    autoplay: autoplay || true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} style={{ width, height }} />;
}
