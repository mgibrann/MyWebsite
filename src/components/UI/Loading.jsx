import Lottie from "react-lottie";
import { LoadingSpinner } from "../../assets";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingSpinner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center">
      <Lottie options={defaultOptions} height={"30%"} width={"30%"} />
    </div>
  );
};

export default Loading;
