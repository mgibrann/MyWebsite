import Lottie from "react-lottie";
import { PageNotFound } from "../assets";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={"70%"} width={"70%"} />
    </div>
  );
};

export default NotFound;
